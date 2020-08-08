import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import global from './global'
import program from './program'
import user from './user'
import activity from './activity'
import document from './document'
import payment from './payment'
import feedback from './feedback'

// Combine all reducers into one root reducer
export default combineReducers({
  router,
  global,
  program,
  user,
  activity,
  document,
  payment,
  feedback
})
