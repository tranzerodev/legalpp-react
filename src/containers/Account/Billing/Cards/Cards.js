import React, { Component } from 'react'
import AddCard from '../components/AddCard'
import Card from '../components/Card'
import CardInput from 'components/CardInput'
import Modal from 'components/Modal'
import { Types } from 'redux/actions/payment'

class Cards extends Component {
  state = {
    visibleCardInput: false,
    visibleConfirm: false,
  }

  confirmDelete = (cardId) => {
    this.setState({ cardId }, () => {
      this.toggleConfirm()
    })
  }

  onDelete = () => {
    const { cardId } = this.state
    const { deleteCustomerCard, user } = this.props
    this.toggleConfirm()
    deleteCustomerCard(user.profile.customerId, cardId)
  }

  toggleConfirm = () => {
    this.setState({ visibleConfirm: !this.state.visibleConfirm })
  }

  componentWillReceiveProps ({ global }) {
    if (global.status[Types.CREATE_CUSTOMER_CARD] === 'success'
        && this.props.global.status[Types.CREATE_CUSTOMER_CARD] === 'request') {
      this.toggleCardInput()
    }
  }

  onResponse = (response) => {
    const { createCustomerCard, user } = this.props
    createCustomerCard(user.profile.customerId, response.nonce, response.cardData.billing_postal_code)
  }

  toggleCardInput = () => {
    this.setState({ visibleCardInput: !this.state.visibleCardInput })
  }

  render () {
    const { visibleCardInput, visibleConfirm } = this.state
    const { global, payment: { customer: { cards } } } = this.props

    return (
      <section className="lg-cards row">
        {
          cards && cards.map(card => 
            <div key={card.id} className="col-12 col-sm-6 col-md-4 col-lg-3 px-1" data-aos="fade">
              <Card
                key={card.id}
                card={card}
                onDelete={() => this.confirmDelete(card.id)}
              />
            </div>
          )
        }
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 px-1" data-aos="fade">
          <AddCard onClick={this.toggleCardInput} />
        </div>

        <CardInput
          isOpen={visibleCardInput}
          toggle={this.toggleCardInput}
          onlyCard
          buttonTitle="Add Card"
          processing={global.status[Types.CREATE_CUSTOMER_CARD] === 'request'}
          onResponse={this.onResponse}
        />

        <Modal.Confirm
          isOpen={visibleConfirm}
          toggle={this.toggleConfirm}
          title={'Delete'}
          text={'Are you sure to delete the card?'}
          onOK={this.onDelete}
        />
      </section>
    )
  }
}

export default Cards
