import React, { Component } from 'react'
import download from 'downloadjs'

import Cover from 'components/Cover'
import Button from 'components/Button'

import PreviewModal from '../Document'
import CheckoutModal from 'components/CardInput'
import { Types } from 'redux/actions/payment'

class Topic extends Component {
  state = {
    preview: false,
    visibleCheckout: false
  }

  componentWillReceiveProps ({ global, payment }) {
    if (
      global.status[Types.BUY_DOCUMENT] !== 'request' &&
      this.props.global.status[Types.BUY_DOCUMENT] === 'request'
    ) {
      this.props.getDownloadUrl(payment.res.data.item.chargeId)
      this.toggleCheckout()
    }

    if (
      global.status[Types.GET_DOWNLOAD_URL] !== 'request' &&
      this.props.global.status[Types.GET_DOWNLOAD_URL] === 'request'
    ) {
      download(payment.res.url)
      if (payment.res.document.id === 'ca_llc') {
        download(
          'https://s3-us-west-2.amazonaws.com/legalmaven-templates/Filing+Instructions+-+Corp.pdf'
        )
      }
      this.props.showFeedback(true)
    }
  }

  togglePreview = () => {
    this.setState({ preview: !this.state.preview })
  }

  toggleCheckout = () => {
    this.setState({ visibleCheckout: !this.state.visibleCheckout })
  }

  onCheckout = response => {
    const { form, data, buyDocument, activityId } = this.props

    buyDocument(
      response.nonce,
      {
        email: response.customer.email,
        billing_address: {
          postal_code: response.cardData.billing_postal_code
        }
      },
      {
        id: form,
        data,
        activityId
      }
    )
  }

  render () {
    const { preview, visibleCheckout } = this.state
    const { user, form, data, onEdit, global } = this.props

    // const price = form === 'ca_llc' ? 69.0 : 19.0
    const price = 19.0

    return (
      <div className='final-form-modal wow fadeIn'>
        <div className='final-modal__header'>Congratulations !</div>
        <div className='final-modal__content'>
          <span className='message'>
            <i className='fas fa-check-circle' /> Your document is ready to go !
          </span>
          <div className='actions'>
            <Cover
              title='VIEW'
              icon='fas fa-eye'
              description='Review your document'
              onClick={this.togglePreview}
            />
            <Cover
              title='EDIT'
              icon='fas fa-pencil-alt'
              description='Make changes to document'
              onClick={onEdit}
            />
            {/* <Cover title="SAVE" icon="fas fa-save" description="Save document to profile" /> */}
          </div>
        </div>
        <div className='final-modal__footer'>
          <Button
            fullWidth
            onClick={this.toggleCheckout}
            loading={global.status[Types.BUY_DOCUMENT] === 'request'}
          >
            <i className='fas fa-download' />
            &nbsp;CHECKOUT TO DOWNLOAD
          </Button>
        </div>
        <PreviewModal
          isOpen={preview}
          toggle={this.togglePreview}
          form={form}
          data={data}
        />
        <CheckoutModal
          isOpen={visibleCheckout}
          toggle={this.toggleCheckout}
          price={price}
          buttonTitle='Pay and Download Now'
          onResponse={this.onCheckout}
          profile={user.profile}
          processing={global.status[Types.BUY_DOCUMENT] === 'request'}
        />
      </div>
    )
  }
}

export default Topic
