import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import Button from 'components/Button'
import OverlaySpinner from 'components/OverlaySpinner'
import { Types } from 'redux/actions/user'
import { notification } from 'antd'

import { facebook, google } from 'configs'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

class SignUp extends Component {
  state = {
    given_name: '',
    family_name: '',
    email: '',
    password: '',
    rePassword: ''
  }

  componentDidMount () {
    AOS.init()
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  validateInput = () => {
    const { password, rePassword } = this.state

    if (password !== rePassword) {
      notification['error']({
        message: 'Input Error',
        description: 'Password does not match!'
      })
      return false
    }

    return true
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.validateInput() === false) {
      return
    }

    const { signUp } = this.props
    signUp(this.state)
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
    const { global } = this.props
    const { given_name, family_name, email, password, rePassword } = this.state
    return (
      <div className='signup' data-aos='flip-left'>
        <div className='auth__header'>
          <h1 className='title'>Create Account</h1>
          <h2 className='description'>
            <strong>Great choice! </strong>
            Let's create your free account
          </h2>
        </div>
        <form className='auth__inputs' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='given_name' className='label'>First Name</label>
            <input
              className='input form-control'
              name='given_name'
              placeholder=''
              required
              value={given_name}
              onChange={this.onChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='family_name' className='label'>Last Name</label>
            <input
              className='input form-control'
              name='family_name'
              placeholder=''
              required
              value={family_name}
              onChange={this.onChange}
            />
          </div>
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
              placeholder='Must be at least 8 characters'
              required
              value={password}
              onChange={this.onChange}
            />
            <input
              type='password'
              className='input form-control'
              name='rePassword'
              placeholder='Confirm password'
              style={{ marginTop: 6 }}
              required
              value={rePassword}
              onChange={this.onChange}
            />
          </div>
          <Button
            type='submit'
            fullWidth
            className='button'
            style={{ marginTop: '16px' }}
            loading={
              global.status[Types.SIGN_UP] === 'request' ||
                global.status[Types.SOCIAL_LOGIN] === 'request'
            }
          >
            Sign Up
          </Button>
        </form>
        <div className='auth__buttons'>
          {global.status[Types.SOCIAL_LOGIN] !== 'request' &&
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
                <Link className='link-page' to='/auth/signin'>
                  Already have account? Sign In
                </Link>
              </div>
            </div>}
        </div>
        <div className='auth__policy-text'>
          By signing up, you agree to
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

export default SignUp
