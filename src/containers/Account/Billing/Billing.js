import React, { Component } from 'react'
import AOS from 'aos'

import TabButton from 'components/TabButton'
import OverlaySpinner from 'components/OverlaySpinner'
import { Types } from 'redux/actions/payment'

import Cards from './Cards'

import './styles.css'

class Billing extends Component {
  componentDidMount () {
    const { user, getCustomer } = this.props
    getCustomer(user.profile.customerId)
    AOS.init()
  }

  render () {
    const { global } = this.props

    return (
      <section className="lg-billing container">
        <header className="d-flex mt-3">
          <TabButton
            className="m-2"
            onClick={() => this.setOnlyPurchased(false)}
            active={true}
          >
            <i className="far fa-credit-card mr-1" /> Credit Cards
          </TabButton>
        </header>

        <Cards />

        <OverlaySpinner
          visible={
            global.status[Types.GET_CUSTOMER] === 'request' ||
            global.status[Types.DELETE_CUSTOMER_CARD] === 'request'
          }
        />
      </section>
    )
  }
}

export default Billing
