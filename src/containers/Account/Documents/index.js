import React from 'react'
import { Switch, Route } from 'react-router-dom'
import asyncComponent from 'components/AsyncComponent'

import './styles.css'

const asyncList = asyncComponent(() => import('./List'))
const asyncDetail = asyncComponent(() => import('./Detail'))

const Document = (props) => {
  return (
    <Switch>
      <Route exact path="/account/documents" component={asyncList} />
      <Route exact path="/account/documents/:id" component={asyncDetail} />
    </Switch>
  )
}

export default Document