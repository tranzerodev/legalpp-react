import React, { Component } from 'react'
import FeedbackAsk from 'containers/Feedback/FeedbackAsk'
import Header from './components/Header'
import routes from './routes'
import { Types } from 'redux/actions/user'

class Root extends Component {
  componentDidMount () {
    if (this.props.location.pathname !== '/') {
      // Isn't on Home Page
      document.body.classList.remove('app-home')
      document.body.classList.remove('header-transparent')
    }

    const { getCurrentUser } = this.props
    getCurrentUser()
  }

  componentWillReceiveProps ({ location }) {
    if (location.pathname !== this.props.location.pathname) {
      if (location.pathname === '/') {
        document.body.classList.add('app-home')
      } else {
        document.body.classList.remove('app-home')
        document.body.classList.remove('header-transparent')
      }
      if (location.pathname === '/Transform') {
        document.body.classList.add('app-transform')
      } else {
        document.body.classList.remove('app-transform')
        document.body.classList.remove('header-transparent')
      }
    }
  }

  render () {
    const {
      location: { pathname },
      history,
      user,
      signOut,
      global,
      feedback,
      showFeedback
    } = this.props

    const loginChecked =
      global.status[Types.GET_CURRENT_USER] &&
      global.status[Types.GET_CURRENT_USER] !== 'request'

    /* CONSIDER ME: If loginChecking time is long, we need to show loading screen */
    if (!loginChecked) return null

    return (
      <div className='app'>
        <Header
          signed={user.authenticated}
          pathname={pathname}
          signOut={signOut}
          changeRoute={history.push}
        />
        <main className='main-content'>{routes}</main>
        <FeedbackAsk
          isOpen={feedback.visible}
          toggle={() => showFeedback(false)}
          changeRoute={history.push}
        />
      </div>
    )
  }
}

export default Root
