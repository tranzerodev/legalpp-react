import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from 'components/AsyncComponent'
const asyncSignIn = asyncComponent(() => import('./SignIn')) 
const asyncSignUp = asyncComponent(() => import('./SignUp')) 
const asyncForgotPassword = asyncComponent(() => import('./ForgotPassword')) 
const asyncResetPassword = asyncComponent(() => import('./ResetPassword')) 

const Authentication = ({ user }) => {
  if (user.authenticated) { // Already signed in.
    return <Redirect to="/" />
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Switch>
        <Route path="/auth/signin" component={asyncSignIn} />
        <Route path="/auth/signup" component={asyncSignUp} />
        <Route path="/auth/forgotpassword" component={asyncForgotPassword} />
        <Route path="/auth/resetpassword/:email" component={asyncResetPassword} />
      </Switch>
    </div>
  )
}

export default Authentication