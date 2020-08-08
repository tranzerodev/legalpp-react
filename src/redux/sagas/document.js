import { put, call, select, takeEvery, all } from 'redux-saga/effects'
import { Types } from '../actions/document'
import * as services from 'services/activity'
import { requestCreator, successCreator, failureCreator } from 'utils/action'

// Will be fired on GET_DOCUMENTS actions
function* getDocuments(action) {
  try {
    yield put(requestCreator(Types.GET_DOCUMENTS, {}))
    const res = yield call(services.getActivities, 'form')
    yield put(successCreator(Types.GET_DOCUMENTS, res))
  } catch (err) {
    yield put(failureCreator(Types.GET_DOCUMENTS, { err }))
  }
}

// Will be fired on GET_DOCUMENT actions
function* getDocument(action) {
  try {
    yield put(requestCreator(Types.GET_DOCUMENT, {}))
    const res = yield call(services.getActivity, action.activityId)
    yield put(successCreator(Types.GET_DOCUMENT, res))
  } catch (err) {
    yield put(failureCreator(Types.GET_DOCUMENT, { err }))
  }
}

// Will be fired on UPDATE_DOCUMENT actions
function* updateDocument(action) {
  try {
    yield put(requestCreator(Types.UPDATE_DOCUMENT, {}))

    const { current } = yield select(_ => _.document)
    const params = {
      activityId: current.activityId,
      content: {
        ...current.content,
        store: action.store,
      }
    }
    const res = yield call(services.saveActivity, params)
    yield put(successCreator(Types.UPDATE_DOCUMENT, res))
  } catch (err) {
    yield put(failureCreator(Types.UPDATE_DOCUMENT, { err }))
  }
}

// Will be fired on RENAME_DOCUMENT actions
function* renameDocument(action) {
  try {
    yield put(requestCreator(Types.RENAME_DOCUMENT, {}))

    const { current } = yield select(_ => _.document)
    const params = {
      activityId: current.activityId,
      activityName: action.name,
    }
    const res = yield call(services.saveActivity, params)
    yield put(successCreator(Types.RENAME_DOCUMENT, res))
  } catch (err) {
    yield put(failureCreator(Types.RENAME_DOCUMENT, { err }))
  }
}

// Will be fired on DELETE_DOCUMENT actions
function* deleteDocument(action) {
  try {
    yield put(requestCreator(Types.DELETE_DOCUMENT, {}))
    const res = yield call(services.deleteActivity, action.activityId)
    yield put(successCreator(Types.DELETE_DOCUMENT, res))
  } catch (err) {
    yield put(failureCreator(Types.DELETE_DOCUMENT, { err }))
  }
}

export function* documentSaga() {
  yield all([
    takeEvery(Types.GET_DOCUMENTS, getDocuments),
    takeEvery(Types.GET_DOCUMENT, getDocument),
    takeEvery(Types.UPDATE_DOCUMENT, updateDocument),
    takeEvery(Types.RENAME_DOCUMENT, renameDocument),
    takeEvery(Types.DELETE_DOCUMENT, deleteDocument),
  ])
}
