import { put, call, takeLatest, all } from 'redux-saga/effects'

import { Types } from '../actions/feedback'
import * as services from 'services/feedback'
import { requestCreator, successCreator, failureCreator } from 'utils/action'

// Will be fired on SUBMIT_FEEDBACK actions
function * submitFeedback (action) {
  try {
    yield put(requestCreator(Types.SUBMIT_FEEDBACK, {}))
    const res = yield call(services.submitFeedback, action.payload)
    yield put(successCreator(Types.SUBMIT_FEEDBACK, res))
  } catch (err) {
    yield put(failureCreator(Types.SUBMIT_FEEDBACK, { err }))
  }
}

export function * feedbackSaga () {
  yield all([takeLatest(Types.SUBMIT_FEEDBACK, submitFeedback)])
}
