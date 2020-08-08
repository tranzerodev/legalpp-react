import { createReducer } from 'reduxsauce'
import { Types } from '../actions/feedback'

export const initialState = {
  visible: null
}
const setVisibility = (state, action) => ({
  ...state,
  visible: action.visible
})

const handlers = {
  [Types.SET_VISIBILITY]: setVisibility
}

export default createReducer(initialState, handlers)
