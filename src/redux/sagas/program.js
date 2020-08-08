import { put, call, select, takeLatest, all, take } from 'redux-saga/effects'
import { push, goBack } from 'react-router-redux'
import qs from 'query-string'

import { Types, Creators } from '../actions/program'
import { Creators as ActivityCreators } from '../actions/activity'
import * as services from 'services/program'
import { getActivity } from 'services/activity'
import { requestCreator, successCreator, failureCreator, success, failure } from 'utils/action'

// Will be fired on GET_SCRIPT actions
function* getScript(action) {
  try {
    yield put(requestCreator(Types.GET_SCRIPT, {}))
    const res = yield call(services.getScript, action.id)
    yield put(successCreator(Types.GET_SCRIPT, { id: action.id, script: res }))
  } catch (err) {
    yield put(failureCreator(Types.GET_SCRIPT, { err }))
  }
}

// Will be fired on SET_CURRENT actions
function* setCurrent(action) {
  try {
    yield put(requestCreator(Types.SET_CURRENT, {}))

    const { id } = action
    let { scripts } = yield select(state => state.program)
    if (scripts[id] == null) {
      yield put(Creators.getScript(id))
      yield take([success(Types.GET_SCRIPT), failure(Types.GET_SCRIPT)])
    }
    yield put(successCreator(Types.SET_CURRENT, { id }))

    scripts = yield select(state => state.program.scripts)
    yield put(Creators.stepNext(scripts[id].start, {}))
  } catch (err) {
    yield put(failureCreator(Types.SET_CURRENT, { err }))
  }
}

// Will be fired on STEP_NEXT actions
// const _getNodeIndexById = (nodes, id) => {
//   return nodes.findIndex(node => node.id === id)
// }

const _getNodeById = (nodes, id) => {
  return nodes.find(node => node.id === id)
}

 // Here, action is not redux concept. It is a concept of our custom script.
 // This function mutate its param - store
const _runAction = (node, store) => {
  const { content } = node
  const { kind, value } = content
  let next = ''

  if (kind === 'CHECK_COUNTY_EXEMPTION') {
    next = content.next[0]
    if (store['county_exemption'][0] !== false) {
      next = content.next[1]
    }
  } else if (kind === 'CHECK_CITY_EXEMPTION') {
    next = content.next[0]
    if (store['city_exemption'][0] !== false) {
      next = content.next[1]
    }
  } else if (kind === 'SET_VALUE') {
    store[content.store] = value
    next = content.next
  } else if (kind === 'ADD_VALUE') {
    store[content.store] += value
    next = content.next
  } else if (kind === 'IS_VALUE') {
    if (value === store[content.store]) {
      next = content.next[0]
    } else {
      next = content.next[1]
    }
  } else if (kind === 'SWITCH_VALUE') {
    let i = 0
    for (i = 0; i < value.length; i++) {
      if (store[content.store] <= value[i]) break
    }
    next = content.next[i]
  } else if (kind === 'IN_ARRAY') {
    if (value.find(e => e === store[content.store])) {
      next = content.next[0]
    } else {
      next = content.next[1]
    }
  }

  return { next, store }
}

function* stepNext(action) {
  try {
    yield put(requestCreator(Types.STEP_NEXT, {}))

    const { scripts, current, progress } = yield select(state => state.program)
    const script = scripts[current]
    const { nextId, store } = action
    const newStore = { ...progress.store, ...store }
    let nextNode = _getNodeById(script.nodes, nextId)

    while ( nextNode.kind === 'Action' ) {
      const actionResult = _runAction(nextNode, newStore)
      nextNode = _getNodeById(script.nodes, actionResult.next)
    }

    let history = []
    if (progress.node) { // not init stage
      history = [{ node: progress.node, store: newStore }, ...progress.history]
    }

    const newProgress = { node: nextNode, store: newStore, history }
    yield put(Creators.updateProgress(newProgress))

    // handle Final or Goto Node
    if (nextNode.kind === 'Goto') {
      let nextPath = `/programs/${nextNode.content.id}`
      yield put(push(nextPath))
    } else {
      // save Activity
      if (progress.node) {
        const { authenticated } = yield select(_ => _.user)
        if (authenticated) {
          const { search } = yield select(({ router }) => router.location)
          const query = qs.parse(search)
          yield put(ActivityCreators.saveActivity(query.activity, newProgress))
          yield take([success(ActivityCreators.SAVE_ACTIVITY), failure(ActivityCreators.SAVE_ACTIVITY)])
        }
      }
    }

    yield put(successCreator(Types.STEP_NEXT, { }))
  } catch (err) {
    yield put(failureCreator(Types.STEP_NEXT, { err }))
  }
}

function* stepBack(action) {
  try {
    yield put(requestCreator(Types.STEP_BACK, {}))

    const { progress } = yield select(state => state.program)

    if (progress.history.length === 0) {
      // throw new Error('Cannot back anymore')
      yield put(goBack())
      return
    }

    const prevState = progress.history[0]
    const history = progress.history.slice(1)
    const prevProgress = { node: prevState.node, store: prevState.store, history }

    yield put(Creators.updateProgress(prevProgress))
    
    // Save Activity
    const { authenticated } = yield select(_ => _.user)
    if (authenticated) {
      const { search } = yield select(({ router }) => router.location)
      const query = qs.parse(search)
      yield put(ActivityCreators.saveActivity(query.activity, prevProgress))
      yield take([success(ActivityCreators.SAVE_ACTIVITY), failure(ActivityCreators.SAVE_ACTIVITY)])
    }
    yield put(successCreator(Types.STEP_BACK, { }))
  } catch (err) {
    yield put(failureCreator(Types.STEP_BACK, { err, showAlert: false }))
  }
}

function* loadActivity(action) {
  try {
    yield put(requestCreator(Types.LOAD_ACTIVITY, {}))

    const response = yield call(getActivity, action.activityId)
    yield put(Creators.updateProgress(response.data.content))
    yield put(successCreator(Types.LOAD_ACTIVITY, { }))
  } catch (err) {
    yield put(failureCreator(Types.LOAD_ACTIVITY, { err }))
  }
}

export function* programSaga() {
  yield all([
    takeLatest(Types.GET_SCRIPT, getScript),
    takeLatest(Types.SET_CURRENT, setCurrent),
    takeLatest(Types.STEP_NEXT, stepNext),
    takeLatest(Types.STEP_BACK, stepBack),
    takeLatest(Types.LOAD_ACTIVITY, loadActivity)
  ])
}
