import { createReducer } from 'reduxsauce'
import { Types } from '../actions/global'

export const initialState = {
  status: {},
}

const updateState = (state, action) => ({
  ...state,
  ...action.payload,
})

const handlers = {
  [Types.UPDATE_STATE]: updateState,
}

export default createReducer(initialState, handlers)
