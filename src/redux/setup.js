import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import sagas from './sagas'
import rootReducer from './reducers'

const setupStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()
  const history = createBrowserHistory()

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ]
  const enhancers = [
    applyMiddleware(...middlewares),
  ]

  // Add redux dev tool extension
  if (process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering during development.
    if (window.devToolsExtension) {
      enhancers.push(window.devToolsExtension())
    }
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(...enhancers)
  )

  // Run Sagas
  sagas.forEach(saga => sagaMiddleware.run(saga))

  // Extension
  store.history = history

  return store
}

export default setupStore