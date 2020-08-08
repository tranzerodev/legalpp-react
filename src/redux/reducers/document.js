import { createReducer } from 'reduxsauce'
import { Types } from '../actions/document'
import { success } from 'utils/action'

export const initialState = {
  current: null,
  documents: [],
}

const setCurrentDocument = (state, action) => {
  return {
    ...state,
    current: action.current,
  }
}

const getDocumentsSuccess = (state, action) => {
  return {
    ...state,
    documents: action.payload.data,
  }
}

const getDocumentSuccess = (state, action) => {
  return {
    ...state,
    current: action.payload.data,
  }
}

const updateDocumentSuccess = (state, action) => {
  return {
    ...state,
    current: {
      ...state.current,
      ...action.payload.data,
    }
  }
}

const deleteDocumentSuccess = (state, action) => {
  const documents = state.documents.filter(
    document => document.activityId !== action.payload.activityId)

  return {
    ...state,
    documents,
  }
}

const handlers = {
  [Types.SET_CURRENT_DOCUMENT]: setCurrentDocument,
  [success(Types.GET_DOCUMENTS)]: getDocumentsSuccess,
  [success(Types.GET_DOCUMENT)]: getDocumentSuccess,
  [success(Types.UPDATE_DOCUMENT)]: updateDocumentSuccess,
  [success(Types.RENAME_DOCUMENT)]: updateDocumentSuccess,
  [success(Types.DELETE_DOCUMENT)]: deleteDocumentSuccess,
}

export default createReducer(initialState, handlers)
