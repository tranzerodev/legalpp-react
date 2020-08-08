import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import { Types } from 'redux/actions/user'
import Button from 'components/Button'
import OverlaySpinner from 'components/OverlaySpinner'

import { facebook, google } from 'configs'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  componentDidMount () {
    AOS.init()
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  validateInput = () => {
    return true
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.validateInput() === false) {
      return
    }

    const { email, password } = this.state
    const { signIn } = this.props
    signIn(email, password)
  }

  onFacebook = response => {
    if (global.status[Types.SOCIAL_LOGIN] === 'request') return

    const { socialLogin } = this.props

    const data = {
      email: response.email,
      givenName: response.first_name,
      familyName: response.last_name,
      name: `${response.first_name} ${response.last_name}`
    }

    socialLogin(
      'facebook',
      {
        token: response.accessToken
      },
      data
    )
  }

  onGoogle = response => {
    if (global.status[Types.SOCIAL_LOGIN] === 'request') return

    const { socialLogin } = this.props

    socialLogin(
      'google',
      {
        token: response.tokenObj.id_token,
        expires_at: response.tokenObj.expires_at
      },
      response.profileObj
    )
  }

  render () {
    const { email, password } = this.state
    const { global } = this.props

    return (
      <div className='signin' data-aos='flip-right'>
        <div className='auth__header'>
          <h1 className='title'>Sign In</h1>
          <h2 className='description'>
            <strong>Welcome back! </strong>
            Please sign in to access and review your account.
          </h2>
        </div>
        <form className='auth__inputs' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email' className='label'>Email</label>
            <input
              type='email'
              className='input form-control'
              name='email'
              placeholder=''
              required
              value={email}
              onChange={this.onChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password' className='label'>Password</label>
            <input
              type='password'
              className='input form-control'
              name='password'
              placeholder=''
              value={password}
              onChange={this.onChange}
            />
            <div style={{ textAlign: 'right' }}>
              <Link to='/auth/forgotpassword' className='link'>
                Forgot password?
              </Link>
            </div>
          </div>
          <Button
            type='submit'
            fullWidth
            className='button'
            style={{ marginTop: '16px' }}
          >
            Sign In
          </Button>
        </form>

        <div className='auth__buttons'>
          <div>
            <div className='social-buttons'>
              <FacebookLogin
                appId={facebook.appId}
                autoLoad={false}
                fields='email, first_name, last_name'
                cssClass='button facebook-button'
                textButton='Facebook'
                icon='fab fa-facebook-f'
                callback={this.onFacebook}
              />

              <GoogleLogin
                clientId={google.clientId}
                onSuccess={this.onGoogle}
                onFailure={() => {}}
                className='button google-button'
              >
                <i className='fab fa-google' />
                Google
              </GoogleLogin>
            </div>
            <div style={{ marginTop: '20px' }}>
              <Link className='link-page' to='/auth/signup'>
                Do not have account? Create account
              </Link>
            </div>
          </div>
        </div>
        <div className='auth__policy-text'>
          By signing in, you agree to
          {' '}
          <a className='policy__link' href='/termofuse' target='_blank'>
            Legal Maven's Terms of Use
          </a>
          .
        </div>

        <OverlaySpinner
          visible={
            global.status[Types.SIGN_IN] === 'request' ||
              global.status[Types.SOCIAL_LOGIN] === 'request'
          }
        />
      </div>
    )
  }
}

export default SignIn
