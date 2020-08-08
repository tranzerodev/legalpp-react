import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Import Components
import asyncComponent from 'components/AsyncComponent'

const AsyncHome = asyncComponent(() => import('../Home'))
const AsyncTransform = asyncComponent(() => import('../Transform'))
const AsyncLegalTopics = asyncComponent(() => import('../LegalTopics'))
const AsyncLegalForms = asyncComponent(() => import('../LegalForms'))
const AsyncProgram = asyncComponent(() => import('../Program'))
const AsyncAuthentication = asyncComponent(() => import('../Authentication'))
const AsyncAccount = asyncComponent(() => import('../Account'))
const AsyncTermOfUse = asyncComponent(() => import('../TermOfUse'))
const AsyncFeedback = asyncComponent(() => import('../Feedback'))

const routes = (
  <Switch>
    <Route exact path='/' component={AsyncHome} /> 
    <Route exact path='/Transform' component={AsyncTransform} />
    <Route path='/legaltopics' component={AsyncLegalTopics} />
    <Route path='/legalforms' component={AsyncLegalForms} />
    <Route path='/programs/:id' component={AsyncProgram} />
    <Route path='/auth' component={AsyncAuthentication} />
    <Route path='/account' component={AsyncAccount} />
    <Route path='/termofuse' component={AsyncTermOfUse} />
    <Route path='/feedback' component={AsyncFeedback} />
  </Switch>
)

export default routes
