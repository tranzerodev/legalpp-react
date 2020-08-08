import React, { Component } from 'react'

import Button from 'components/Button'

class EmailEditor extends Component {

  constructor (props) {
    super(props)

    this.state = {
      email: props.email,
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSave(this.state)
    this.props.close()
  }

  render() {
    return (
      <div className="lg-profile-info-editor">
        <form className="row" onSubmit={ this.onSubmit }>
          <div className="col-12">
            <div className="lg-title">Please enter your email.</div>
          </div>
          <div className="col-12 col-md-6">
            <input type="email" name="email" placeholder="Email" autoFocus required value={ this.state.email } onChange={ this.onChange }/>
          </div>
          <div className="col-12 col-md-6">
            <Button size="small" className="mr-2 my-1" type="submit">Save</Button>
            <Button size="small" onClick={ this.props.close }>Cancel</Button>
          </div>
        </form>
        <hr />
      </div>
    )
  }
}

export default EmailEditor
