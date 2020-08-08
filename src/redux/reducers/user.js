import { createReducer } from 'reduxsauce'
import { Types } from 'redux/actions/user'
import { success, failure } from 'utils/action'

export const initialState = {
  profile: {},
  authenticated: false,
  err: null,
}

const commonSuccess = (state, action) => ({
  ...state,
  ...action.payload,
})

const saveProfileSuccess = (state, action) => ({
  ...state,
  profile: {
    ...state.profile,
    ...action.payload.profile,
  }
})

const signOutSuccess = (state, action) => initialState

const getCurrentUserFailure = (state, action) => initialState

const handlers = {
  [success(Types.GET_CURRENT_USER)]: commonSuccess,
  [failure(Types.GET_CURRENT_USER)]: getCurrentUserFailure,
  [success(Types.SOCIAL_LOGIN)]: commonSuccess,
  [success(Types.SIGN_IN)]: commonSuccess,
  [success(Types.SIGN_OUT)]: signOutSuccess,
  [success(Types.GET_PROFILE)]: commonSuccess,
  [success(Types.SAVE_PROFILE)]: saveProfileSuccess,
}

export default createReducer(initialState, handlers)
