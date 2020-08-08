import React, { Component } from 'react'

import Button from 'components/Button'

class NameEditor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ...props.name,
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

  render () {
    return (
      <div className="lg-profile-info-editor">
        <form className="row" onSubmit={ this.onSubmit }>
          <div className="col-12">
            <div className="lg-title">Please enter your name.</div>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <input type="text" name="givenName" placeholder="Given Name" autoFocus required value={ this.state.givenName } onChange={ this.onChange } />
            <input type="text" name="familyName" placeholder="Family Name" required value={ this.state.familyName } onChange={ this.onChange } />
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <Button size="small" className="mr-2 my-1" type="submit">Save</Button>
            <Button size="small" onClick={ this.props.close }>Cancel</Button>
          </div>
        </form>
        <hr />
      </div>
    )
  }
}

export default NameEditor
