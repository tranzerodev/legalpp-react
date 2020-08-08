import { put, select, takeEvery, all } from 'redux-saga/effects'
import { Creators } from 'redux/actions/global'
import { origin } from 'utils/action'
import { app } from 'configs'
import { notification } from 'antd'

function* listenAction(action) {
  try {
    const { status } = yield select(state => state.global)
    if (action.type.endsWith('/request')) {
      const newStatus = {
        ...status,
        [origin(action.type)]: 'request',
      }
      yield put(Creators.updateState({ status: newStatus }))

    } else if (action.type.endsWith('/success')) {
      const newStatus = {
        ...status,
        [origin(action.type)]: 'success',
      }
      yield put(Creators.updateState({ status: newStatus }))

    } else if (action.type.endsWith('/failure')) {
      const newStatus = {
        ...status,
        [origin(action.type)]: 'failure',
      }
      yield put(Creators.updateState({ status: newStatus }))

      if (app.alertFailure) {
        const { err, showAlert } = action.payload
        if (err && showAlert !== false) {
          notification['error']({
            message: 'Error',
            description: err.message
          })
        }
      }
    }
  } catch (err) {
    if (app.alertUncaughted) {
      if (err) {
        notification['error']({
          message: 'Error',
          description: err.message
        })
      }
    }
  }
}

export function* globalSaga() {
  yield all([
    takeEvery('*', listenAction)
  ])
}