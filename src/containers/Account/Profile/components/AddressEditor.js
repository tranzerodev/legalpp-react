import React, { Component } from 'react'

import Button from 'components/Button'

class AddressEditor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      address: '',
      city: '',
      state: '',
      zipCode: '',
      ...props.address,
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
            <div className="lg-title">Please enter your address.</div>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
          <input type="text" name="address" placeholder="Address" autoFocus required value={ this.state.address } onChange={ this.onChange }/>
              <input type="text" name="city" placeholder="City" required value={ this.state.city } onChange={ this.onChange }/>
              <input type="text" name="state" placeholder="State" required value={ this.state.state } onChange={ this.onChange }/>
              <input type="text" name="zipCode" placeholder="Zip Code" required value={ this.state.zipCode } onChange={ this.onChange } pattern=".{5}" title="Must be 5 characters"/>
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

export default AddressEditor
