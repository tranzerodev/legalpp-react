import { createReducer } from 'reduxsauce'
import { Types } from '../actions/activity'
import { success } from 'utils/action'

export const initialState = {
  current: null,
  activities: [],
}

const setCurrentActivity = (state, action) => {
  return {
    ...state,
    current: action.activity,
  }
}

const getActivitiesSuccess = (state, action) => {
  return {
    ...state,
    activities: action.payload.data,
  }
}

const getActivitySuccess = (state, action) => {
  return {
    ...state,
    current: action.payload.data,
  }
}

const deleteActivitySuccess = (state, action) => {
  const activities = state.activities.filter(
    activity => activity.activityId !== action.payload.activityId)

  return {
    ...state,
    activities,
  }
}

const handlers = {
  [Types.SET_CURRENT_ACTIVITY]: setCurrentActivity,
  [success(Types.GET_ACTIVITIES)]: getActivitiesSuccess,
  [success(Types.GET_ACTIVITY)]: getActivitySuccess,
  [success(Types.DELETE_ACTIVITY)]: deleteActivitySuccess,
}

export default createReducer(initialState, handlers)
