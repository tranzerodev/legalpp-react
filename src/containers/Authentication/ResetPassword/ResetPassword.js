import React, { Component } from 'react'
import AOS from 'aos'

import { Types } from 'redux/actions/user'
import Button from 'components/Button'
import { notification } from 'antd'

class ResetPassword extends Component {
  state = {
    code: '',
    password: '',
    rePassword: '',
  }

  componentDidMount() {
    AOS.init()
  }

  validateInput = () => {
    const { password, rePassword } = this.state

    if (password !== rePassword) {
      notification['error']({
        message: 'Input Error',
        description: 'Password does not match!',
      })
      return false
    }

    return true
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  resendCode = () => {
    const { forgotPassword } = this.props
    const { email } = this.props.match.params
    forgotPassword(email)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.validateInput() === false) {
      return
    }

    const { code, password } = this.state
    const { confirmPassword } = this.props
    const { email } = this.props.match.params
    confirmPassword(email, code, password)
  }

  render() {
    const { code, password, rePassword } = this.state
    const { global } = this.props

    return (
      <div className="forgotpassword" data-aos="flip-left">
        <div className="auth__header">
          <h1 className="title">Reset Password</h1>
          <h2 className="description">
            <strong></strong>
            We've sent the verification code to your email.
          </h2>
        </div>
        <form className="auth__inputs" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="code" className="label">Code</label>
            <input className="input form-control" name="code" placeholder="" required
              value={code} onChange={this.onChange} />
            <div style={{ textAlign: 'right' }}>
              <a onClick={this.resendCode} className="link">Resend Code</a>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="label">New Password</label>
            <input type="password" className="input form-control" name="password" placeholder="Must be at least 8 characters" required
              value={password} onChange={this.onChange} />
            <input type="password" className="input form-control" name="rePassword" placeholder="Confirm password" style={{ marginTop: 6 }} required
            value={rePassword} onChange={this.onChange} />
          </div>

          <Button type="submit" fullWidth className="button" style={{ marginTop: '16px' }}
            loading={global.status[Types.CONFIRM_PASSWORD] === 'request'}>
            Reset Password
          </Button>
        </form>
        <br />
        <br />
      </div>
    )
  }
}

export default ResetPassword