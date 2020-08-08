import { createReducer } from 'reduxsauce'
import { Types } from '../actions/program'
import { success } from 'utils/action'

export const initialState = {
  scripts: {},
  current: null,
  progress: {
    node: null,
    history: [],
  }
}

const getScriptSuccess = (state, action) => {
  const { id, script } = action.payload
  return {
    ...state,
    scripts: {
      ...state.scripts,
      [id]: script,
    }
  }
}

const setCurrentSuccess = (state, action) => {
  const { id } = action.payload

  return {
    ...state,
    current: id,
    progress: {
      node: null,
      store: {},
      history: [],
    },
  }
}

const updateProgress = (state, action) => {
  return {
    ...state,
    progress: {
      ...state.progress,
      ...action.payload,
    }
  }
}

const handlers = {
  [success(Types.GET_SCRIPT)]: getScriptSuccess,
  [success(Types.SET_CURRENT)]: setCurrentSuccess,

  [Types.UPDATE_PROGRESS]: updateProgress,
}

export default createReducer(initialState, handlers)
