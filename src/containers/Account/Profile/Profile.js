import React, { Component } from 'react'
import AOS from 'aos'

import NameEditor from './components/NameEditor'
import EmailEditor from './components/EmailEditor'
import PhoneEditor from './components/PhoneEditor'
import AddressEditor from './components/AddressEditor'

import OverlaySpinner from 'components/OverlaySpinner'
import { Types } from 'redux/actions/user'

import './styles.css'

class Profile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isNameEditing: false,
      isEmailEditing: false,
      isPhoneEditing: false,
      isAddressEditing: false,

      ...props.profile
    }
  }

  componentDidMount () {
    this.props.getProfile()
    AOS.init()
  }

  componentWillReceiveProps ({ profile }) {
    if (profile !== this.props.profile) {
      this.setState({
        ...profile
      })
    }
  }

  onChange = name => value => {
    const data = {
      [name]: value
    }
    this.setState(data)
    this.props.saveProfile(data)
  }

  setEditing = (name, show) => () => {
    this.setState({
      [`is${name}Editing`]: show
    })
  }

  save = data => {
    this.props.saveProfile(data)
  }

  render () {
    const { global } = this.props
    const {
      isNameEditing,
      isEmailEditing,
      isAddressEditing,
      isPhoneEditing,
      givenName,
      familyName,
      email,
      phone,
      state,
      city,
      zipCode,
      address
    } = this.state
    const name = givenName || familyName
      ? `${givenName || ''} ${familyName || ''}`
      : ''

    return (
      <section className='lg-profile container' data-aos='fade-down'>
        <section className='lg-profile-block mt-3'>
          {/* <div className="lg-profile-block-header">
            <div className="lg-title mt-1">
              User Information
            </div>
          </div> */}

          <div className='row my-4'>
            <div className='col-12 col-sm-5 col-md-4'>
              <div className='lg-profile-avatar mx-auto my-4'>
                <i className='fas fa-user' />
              </div>
            </div>
            <div className='col-12 col-sm-7 col-md-8 px-4'>
              {isNameEditing
                ? <NameEditor
                  close={this.setEditing('Name', false)}
                  name={{ givenName, familyName }}
                  onSave={this.save}
                  />
                : <div
                  className='lg-profile-info lg-profile-info-name my-3'
                  onClick={this.setEditing('Name', true)}
                  >
                  {name || <span className='lg-empty'>Add your name</span>}
                </div>}

              {isEmailEditing
                ? <EmailEditor
                  close={this.setEditing('Email', false)}
                  email={email}
                  onSave={this.save}
                  />
                : <div
                  className='lg-profile-info my-3'
                  onClick={this.setEditing('Email', true)}
                  >
                  <i className='fas fa-envelope' />
                  {email || <span className='lg-empty'>Add your email</span>}
                </div>}

              {isAddressEditing
                ? <AddressEditor
                  close={this.setEditing('Address', false)}
                  address={{ state, city, zipCode, address }}
                  onSave={this.save}
                  />
                : <div
                  className='lg-profile-info my-3'
                  onClick={this.setEditing('Address', true)}
                  >
                  <i className='fas fa-home' />
                  {address
                      ? <div>{address}<br />{city}, {state} {zipCode}</div>
                      : <span className='lg-empty'>Add your address</span>}
                </div>}

              {isPhoneEditing
                ? <PhoneEditor
                  close={this.setEditing('Phone', false)}
                  phone={phone}
                  onSave={this.save}
                  />
                : <div
                  className='lg-profile-info my-3'
                  onClick={this.setEditing('Phone', true)}
                  >
                  <i className='fas fa-phone' />
                  {phone ||
                  <span className='lg-empty'>Add your phone number</span>}
                </div>}
            </div>
          </div>

          <OverlaySpinner
            absolute
            visible={
              global.status[Types.GET_PROFILE] === 'request' ||
                global.status[Types.SAVE_PROFILE] === 'request'
            }
          />
        </section>
      </section>
    )
  }
}

export default Profile
