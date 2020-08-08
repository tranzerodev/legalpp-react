import React, { Component } from 'react'
import AOS from 'aos'

import { Types } from 'redux/actions/user'
import Button from 'components/Button'

class ForgotPassword extends Component {
  state = {
    email: '',
  }

  componentDidMount() {
    AOS.init()
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  validateInput = () => {
    return true
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.validateInput() === false) {
      return
    }

    const { email } = this.state
    const { forgotPassword } = this.props
    forgotPassword(email)
  }

  render() {
    const { email } = this.state
    const { global } = this.props

    return (
      <div className="forgotpassword" data-aos="flip-left">
        <div className="auth__header">
          <h1 className="title">Forgot Password</h1>
          <h2 className="description">
            <strong></strong>
            Please input your email address
          </h2>
        </div>
        <form className="auth__inputs" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="label">Email</label>
            <input type="email" className="input form-control" name="email" placeholder="" required
              value={email} onChange={this.onChange} />
          </div>
          <Button type="submit" fullWidth className="button" style={{ marginTop: '16px' }}
            loading={global.status[Types.FORGOT_PASSWORD] === 'request'}>
            Next
          </Button>
        </form>
        <br />
        <br />
      </div>
    )
  }
}

export default ForgotPassword