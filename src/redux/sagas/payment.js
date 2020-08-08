import {
  put,
  call,
  select,
  takeEvery,
  all,
  takeLatest
} from 'redux-saga/effects'
import { Types } from '../actions/payment'
import * as services from 'services/payment'
import { requestCreator, successCreator, failureCreator } from 'utils/action'

// Will be fired on BUY_DOCUMENT actions
function * buyDocument (action) {
  try {
    yield put(requestCreator(Types.BUY_DOCUMENT, {}))
    const { authenticated } = yield select(_ => _.user)
    let res = null
    if (authenticated) {
      res = yield call(
        services.buyWithIdentity,
        action.nonce,
        action.buyer,
        action.document
      )
    } else {
      res = yield call(
        services.buy,
        action.nonce,
        action.buyer,
        action.document
      )
    }

    yield put(successCreator(Types.BUY_DOCUMENT, { res }))
  } catch (err) {
    yield put(failureCreator(Types.BUY_DOCUMENT, { err }))
  }
}

// Will be fired on GET_DOWNLOAD_URL actions
function * getDownloadUrl (action) {
  try {
    yield put(requestCreator(Types.GET_DOWNLOAD_URL, {}))
    const { authenticated } = yield select(_ => _.user)

    let res = null
    if (authenticated) {
      res = yield call(services.getDownloadUrlWithIdentity, action.chargeId)
    } else {
      res = yield call(services.getDownloadUrl, action.chargeId)
    }

    yield put(successCreator(Types.GET_DOWNLOAD_URL, { res }))
  } catch (err) {
    console.log('err', err)
    yield put(failureCreator(Types.GET_DOWNLOAD_URL, { err }))
  }
}

// Will be fired on GET_PURCAHSES actions
function * getPurchases (action) {
  try {
    yield put(requestCreator(Types.GET_PURCHASES, {}))
    const res = yield call(services.getPurchases)
    yield put(successCreator(Types.GET_PURCHASES, { purchases: res.data }))
  } catch (err) {
    yield put(failureCreator(Types.GET_PURCHASES, { err }))
  }
}

// Will be fired on DELETE_PURCHASE actions
function * deletePurchase (action) {
  try {
    yield put(requestCreator(Types.DELETE_PURCHASE, {}))
    const res = yield call(services.deletePurchase, action.chargeId)
    yield put(successCreator(Types.DELETE_PURCHASE, res))
  } catch (err) {
    yield put(failureCreator(Types.DELETE_PURCHASE, { err }))
  }
}

// Will be fired on GET_CUSTOMER actions
function * getCustomer (action) {
  try {
    yield put(requestCreator(Types.GET_CUSTOMER, {}))
    const res = yield call(services.getCustomer, action.customerId)
    yield put(
      successCreator(Types.GET_CUSTOMER, { customer: res.data.customer })
    )
  } catch (err) {
    yield put(failureCreator(Types.GET_CUSTOMER, { err }))
  }
}

// Will be fired on CREATE_CUSTOMER_CARD actions
function * createCustomerCard (action) {
  try {
    yield put(requestCreator(Types.CREATE_CUSTOMER_CARD, {}))
    const res = yield call(
      services.createCustomerCard,
      action.customerId,
      action.cardNonce,
      action.postalCode
    )
    yield put(successCreator(Types.CREATE_CUSTOMER_CARD, res))
  } catch (err) {
    yield put(failureCreator(Types.CREATE_CUSTOMER_CARD, { err }))
  }
}

// Will be fired on DELETE_CUSTOMER_CARD actions
function * deleteCustomerCard (action) {
  try {
    yield put(requestCreator(Types.DELETE_CUSTOMER_CARD, {}))
    /* const res = */ yield call(
      services.deleteCustomerCard,
      action.customerId,
      action.cardId
    )
    yield put(
      successCreator(Types.DELETE_CUSTOMER_CARD, { cardId: action.cardId })
    )
  } catch (err) {
    yield put(failureCreator(Types.DELETE_CUSTOMER_CARD, { err }))
  }
}

export function * paymentSaga () {
  yield all([
    takeEvery(Types.BUY_DOCUMENT, buyDocument),
    takeEvery(Types.GET_DOWNLOAD_URL, getDownloadUrl),
    takeLatest(Types.GET_PURCHASES, getPurchases),
    takeEvery(Types.DELETE_PURCHASE, deletePurchase),
    takeEvery(Types.GET_CUSTOMER, getCustomer),
    takeEvery(Types.CREATE_CUSTOMER_CARD, createCustomerCard),
    takeEvery(Types.DELETE_CUSTOMER_CARD, deleteCustomerCard)
  ])
}
