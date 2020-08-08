import { put, call, select, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { Types, Creators } from '../actions/activity'
import * as services from 'services/activity'
import { requestCreator, successCreator, failureCreator } from 'utils/action'

// Will be fired on SAVE_ACTIVITY actions
function* saveActivity(action) {
  try {
    yield put(requestCreator(Types.SAVE_ACTIVITY, {}))
    const { id, name } = action
    const { scripts, current } = yield select((state) => state.program)
    let content = action.content
    let program = undefined

    if (!id) { // If we need to create new activity, pass program information.
      program = {
        id: scripts[current].name,
        description: scripts[current].description,
        type: scripts[current].kind,
      }
    }

    const res = yield call(services.saveActivity, {
      activityId: id,
      activityName: name,
      content,
      program,
    })

    if (res && res.data.activityId) {
      yield put(Creators.setCurrentActivity(res.data))
      yield put(push(`?activity=${res.data.activityId}`))
    }
    yield put(successCreator(Types.SAVE_ACTIVITY, {}))
  } catch (err) {
    yield put(failureCreator(Types.SAVE_ACTIVITY, { err, showAlert: false }))
  }
}

// Will be fired on GET_ACTIVITIES actions
function* getActivities(action) {
  try {
    yield put(requestCreator(Types.GET_ACTIVITIES, {}))
    const res = yield call(services.getActivities, 'topic')
    yield put(successCreator(Types.GET_ACTIVITIES, res))
  } catch (err) {
    yield put(failureCreator(Types.GET_ACTIVITIES, { err, showAlert: false }))
  }
}

// Will be fired on GET_ACTIVITY actions
function* getActivity(action) {
  try {
    yield put(requestCreator(Types.GET_ACTIVITY, {}))
    const res = yield call(services.getActivity, action.activityId)
    yield put(successCreator(Types.GET_ACTIVITY, res))
  } catch (err) {
    yield put(failureCreator(Types.GET_ACTIVITY, { err }))
  }
}

// Will be fired on DELETE_ACTIVITY actions
function* deleteActivity(action) {
  try {
    yield put(requestCreator(Types.DELETE_ACTIVITY, {}))
    const res = yield call(services.deleteActivity, action.activityId)
    yield put(successCreator(Types.DELETE_ACTIVITY, res))
  } catch (err) {
    yield put(failureCreator(Types.DELETE_ACTIVITY, { err }))
  }
}

export function* activitySaga() {
  yield all([
    takeEvery(Types.SAVE_ACTIVITY, saveActivity),
    takeLatest(Types.GET_ACTIVITIES, getActivities),
    takeEvery(Types.GET_ACTIVITY, getActivity),
    takeEvery(Types.DELETE_ACTIVITY, deleteActivity),
  ])
}
