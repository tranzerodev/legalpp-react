import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from 'components/AsyncComponent'
import Navbar from './components/Navbar'

const asyncDocuments = asyncComponent(() => import('./Documents'))
const asyncProfile = asyncComponent(() => import('./Profile'))
const asyncBilling = asyncComponent(() => import('./Billing'))
const asyncActivity = asyncComponent(() => import('./Activity'))

const Account = ({ user, location: { pathname } }) => {
  if (!user.authenticated) { // Not signed in.
    return <Redirect to="/auth/signin" />
  }

  return (
    <div className="account">
      <Navbar pathname={pathname}/>
      <Switch>
        <Route path="/account/documents" component={asyncDocuments} />
        <Route path="/account/profile" component={asyncProfile} />
        <Route path="/account/billing" component={asyncBilling} />
        <Route path="/account/activity" component={asyncActivity} />
      </Switch>
    </div>
  )
}

export default Account