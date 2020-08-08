import React from 'react'
import { put, call, takeLatest, all } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { Types, Creators } from 'redux/actions/user'
import * as services from 'services/user'
import * as paymentServices from 'services/payment'
import { requestCreator, successCreator, failureCreator } from 'utils/action'
import { showSuccess, showConfirm } from 'utils/notification'

function* getCurrentUser(action) {
  try {
    yield put(requestCreator(Types.GET_CURRENT_USER))

    const credential = yield call(services.getCurrentIdentity)
    const profile = yield call(services.readProfile)

    yield put(successCreator(Types.GET_CURRENT_USER, { authenticated: credential.authenticated, profile }))
  } catch (err) {
    yield put(failureCreator(Types.GET_CURRENT_USER, { err, showAlert: false }))
  }
}

function* signUp(action) {
  try {
    yield put(requestCreator(Types.SIGN_UP))

    // Cognito User Pool Sign Up
    const result = yield call(services.signUp, action.data)

    yield put(successCreator(Types.SIGN_UP, { result }))

    // Show Success Message and redirect to Sign In Screen
    yield call(showSuccess, 'Welcome!', (
      <div>
        <p>You account is successfully created.</p>
        <div>We've sent the verification email to you.<br />Please check and activate your account.</div>
      </div>
    ))
    yield put(push('/auth/signin'))
  } catch (err) {
    yield put(failureCreator(Types.SIGN_UP, { err }))
  }
}

function* signIn(action) {
  try {
    yield put(requestCreator(Types.SIGN_IN))

    // Cognito User Pool Sign In
    yield call(services.signIn, action.username, action.password)

    // Check the Cognito Sync and save user info if it is the first login
    let profile = yield call(services.readProfile)
    if (profile.email === undefined) {
      const { attributes } = yield call(services.currentUserInfo)
      const { data } = yield call(paymentServices.createCustomer, attributes.email)
      profile = {
        email: attributes.email,
        familyName: attributes.family_name,
        givenName: attributes.given_name,
        customerId: data.customer.id,
      }
      yield call(services.syncData, profile)
    }
    
    yield put(successCreator(Types.SIGN_IN, { authenticated: true, profile }))

    // Redirect to Home Page
    yield put(push('/'))
  } catch (err) {
    let showAlert = true
    if (err.code === 'UserNotConfirmedException') {
      // If User is not confirmed, show confirm dialog to start confirmation flow.
      showAlert = false
      const response = yield call(showConfirm, {
        title: 'Not Confirmed',
        content: (
          <div>
            <div>You account is not verfied.</div>
            <div>Do you want to resend the verification email?</div>
          </div>
        ),
        okText: 'Resend',
      })
      if (response === 'OK') {
        // Resend code
        yield put(Creators.resendCode(action.username))
      }
    }
    yield put(failureCreator(Types.SIGN_IN, { err, showAlert }))
  }
}

function* resendCode(action) {
  try {
    yield put(requestCreator(Types.RESEND_CODE))
    const result = yield call(services.resendCode, action.username)
    yield put(successCreator(Types.RESEND_CODE, { result }))
  } catch (err) {
    yield put(failureCreator(Types.RESEND_CODE, { err }))
  }
}

function* forgotPassword(action) {
  try {
    yield put(requestCreator(Types.FORGOT_PASSWORD))
    const result = yield call(services.forgotPassword, action.username)
    yield put(successCreator(Types.FORGOT_PASSWORD, { result }))
    yield put(push(`/auth/resetpassword/${action.username}`))
  } catch (err) {
    yield put(failureCreator(Types.FORGOT_PASSWORD, { err }))
  }
}

function* confirmPassword(action) {
  try {
    yield put(requestCreator(Types.CONFIRM_PASSWORD))
    const result = yield call(services.confirmPassword, action.username, action.code, action.newPassword)
    yield put(successCreator(Types.CONFIRM_PASSWORD, { result }))
    yield call(showSuccess, 'Success!', (
      <div>
        New Password is set successfully !
      </div>
    ))
    yield put(push('/auth/signin'))
  } catch (err) {
    yield put(failureCreator(Types.CONFIRM_PASSWORD, { err }))
  }
}

function* signOut(action) {
  try {
    yield put(requestCreator(Types.SIGN_OUT))
    yield call(services.signOut)
    yield put(successCreator(Types.SIGN_OUT, {} ))
  } catch (err) {
    yield put(failureCreator(Types.SIGN_OUT, { err }))
  }
}

function* socialLogin(action) {
  try {
    yield put(requestCreator(Types.SOCIAL_LOGIN))

    const credential = yield call(services.federatedSignIn, action.provider, action.response, action.user)

    // Check the Cognito Sync and save user info if it is the first login
    let profile = yield call(services.readProfile)
    if (profile.email === undefined) {
      const { data } = yield call(paymentServices.createCustomer, action.user.email)
      profile = {
        ...action.user,
        customerId: data.customer.id,
      }
      yield call(services.syncData, profile)
    }

    yield put(successCreator(Types.SOCIAL_LOGIN, { authenticated: credential.authenticated, profile }))
  } catch (err) {
    yield put(failureCreator(Types.SOCIAL_LOGIN, { err }))
  }
}

function* getProfile(action) {
  try {
    yield put(requestCreator(Types.GET_PROFILE))

    const profile = yield call(services.readProfile)

    yield put(successCreator(Types.GET_PROFILE, { profile }))
  } catch (err) {
    yield put(failureCreator(Types.GET_PROFILE, { err }))
  }
}

function* saveProfile(action) {
  try {
    yield put(requestCreator(Types.SAVE_PROFILE))
    yield call(services.syncData, action.data)
    yield put(successCreator(Types.SAVE_PROFILE, { profile: action.data }))
  } catch (err) {
    yield put(failureCreator(Types.SAVE_PROFILE, { err }))
  }
}

export function* userSaga() {
  yield all([
    takeLatest(Types.GET_CURRENT_USER, getCurrentUser),
    takeLatest(Types.SIGN_UP, signUp),
    takeLatest(Types.SIGN_IN, signIn),
    takeLatest(Types.RESEND_CODE, resendCode),
    takeLatest(Types.FORGOT_PASSWORD, forgotPassword),
    takeLatest(Types.CONFIRM_PASSWORD, confirmPassword),
    takeLatest(Types.SIGN_OUT, signOut),
    takeLatest(Types.SOCIAL_LOGIN, socialLogin),
    takeLatest(Types.GET_PROFILE, getProfile),
    takeLatest(Types.SAVE_PROFILE, saveProfile),
  ])
}
