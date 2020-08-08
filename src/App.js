import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'
import setupStore from 'redux/setup'
import Root from 'containers/Root'
import 'styles/styles.css'

import Auth from '@aws-amplify/auth'
// import aws_exports from './aws-exports'

// Auth.configure(aws_exports)

const store = setupStore(window.__INITIAL_STATE__)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={store.history}>
          <Route path='/' component={Root} />
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
