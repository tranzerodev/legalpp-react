import React, { Component } from 'react'
import download from 'downloadjs'

import OverlaySpinner from 'components/OverlaySpinner'
import { Types } from 'redux/actions/document'
import { Types as PaymentTypes } from 'redux/actions/payment'
import { message } from 'antd'

import Button from 'components/Button'
import Modal from 'components/Modal'
import CheckoutModal from 'components/CardInput'

import GeneralInfoCard from '../components/GeneralInfoCard'
import EditInput from '../../components/EditInput'
import DocumentModal from 'containers/Program/FinalNode/Document'
import imgBook from 'assets/images/preview.png'

class Detail extends Component {
  constructor (props) {
    super(props)

    this.state = {
      confirmVisible: false,
      previewVisible: false,
      checkoutVisible: false
    }
  }

  componentDidMount () {
    const { id } = this.props.match.params
    this.props.getDocument(id)
  }

  componentWillReceiveProps ({ global, document, payment }) {
    if (
      global.status[PaymentTypes.BUY_DOCUMENT] !== 'request' &&
      this.props.global.status[PaymentTypes.BUY_DOCUMENT] === 'request'
    ) {
      this.props.getDownloadUrl(payment.res.data.item.chargeId)
      this.toggleCheckout()
    }

    if (
      global.status[PaymentTypes.GET_DOWNLOAD_URL] !== 'request' &&
      this.props.global.status[PaymentTypes.GET_DOWNLOAD_URL] === 'request'
    ) {
      download(payment.res.url)
      if (payment.res.document.id === 'ca_llc') {
        download(
          'https://s3-us-west-2.amazonaws.com/legalmaven-templates/Filing+Instructions+-+Corp.pdf'
        )
      }
      this.props.showFeedback(true)
    }

    if (
      global.status[Types.GET_DOCUMENT] === 'success' &&
      this.props.global.status[Types.GET_DOCUMENT] === 'request'
    ) {
      this.setState({
        ...document.current.content.store
      })
    }

    if (
      global.status[Types.DELETE_DOCUMENT] === 'success' &&
      this.props.global.status[Types.DELETE_DOCUMENT] === 'request'
    ) {
      this.props.changeRoute('/account/documents')
    }
  }

  toggleConfirm = () => {
    this.setState({ confirmVisible: !this.state.confirmVisible })
  }

  toggleCheckout = () => {
    this.setState({ checkoutVisible: !this.state.checkoutVisible })
  }

  onCheckout = response => {
    const { document, buyDocument } = this.props
    const data = document.current

    const form = data.content.node.content.form
    const activityId = data.activityId

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

  confirmDelete = () => {
    this.toggleConfirm()
  }

  onChange = name => value => {
    this.setState({
      [name]: value
    })
  }

  togglePreview = () => {
    const isFinished = this.props.document.current.content.node.kind === 'Final'
    if (isFinished) {
      this.setState({ previewVisible: !this.state.previewVisible })
    } else {
      message.error('This document is not finished yet!')
    }
  }

  onSave = () => {
    const data = {
      ...this.state
    }

    // remove inner state varibles
    delete data.confirmVisible
    delete data.previewVisible

    this.props.updateDocument(data)
  }

  onDelete = () => {
    const { deleteDocument, document } = this.props
    this.toggleConfirm()
    deleteDocument(document.current.activityId)
  }

  render () {
    const { document, global, user, renameDocument } = this.props
    const { confirmVisible, previewVisible, checkoutVisible } = this.state

    const data = document.current
    if (!data) return null

    const keys = []
    for (let key in data.content.store) {
      keys.push(key)
    }

    const isFinished = document.current.content.node.kind === 'Final'
    // const price = data.content.node.content.form === 'ca_llc' ? 69.0 : 19.0
    const price = 19.0

    return (
      <section className='lg-documents container'>
        <GeneralInfoCard
          className='py-4 my-3'
          document={data}
          onDelete={this.confirmDelete}
          onChangeName={renameDocument}
        />

        <div className='d-flex'>
          <section className='lg-document-preview mr-3'>
            <img src={imgBook} alt='book' />
            <div
              className='lg-document-preview__title'
              onClick={this.togglePreview}
            >
              View
            </div>
          </section>
          <section className='lg-document-edit-card'>
            {keys.map(key => (
              <div key={key} className='lg-document-edit-card__item py-3 px-4'>
                <span className='lg-document-edit-card__item__label'>
                  {key.replace(/_/g, ' ')}
                </span>
                <EditInput
                  defaultValue={this.state[key]}
                  onSave={this.onChange(key)}
                />
              </div>
            ))}
            <div className='lg-document-edit-card__item px-4' />
          </section>
        </div>

        <section className='lg-document-actions'>
          <Button className='mr-3' borderless onClick={this.onSave}>
            Save Changes
          </Button>
          <Button disabled={!isFinished} onClick={this.toggleCheckout}>
            Continue to Checkout
          </Button>
        </section>

        <Modal.Confirm
          isOpen={confirmVisible}
          toggle={this.toggleConfirm}
          title={'Delete'}
          text={'Are you sure to delete the document?'}
          onOK={this.onDelete}
        />

        <OverlaySpinner
          visible={
            global.status[Types.GET_DOCUMENT] === 'request' ||
            global.status[Types.UPDATE_DOCUMENT] === 'request' ||
            global.status[Types.DELETE_DOCUMENT] === 'request' ||
            global.status[Types.RENAME_DOCUMENT] === 'request' ||
            global.status[PaymentTypes.BUY_DOCUMENT] === 'request' ||
            global.status[PaymentTypes.GET_DOWNLOAD_URL] === 'request'
          }
        />

        <DocumentModal
          isOpen={previewVisible}
          toggle={this.togglePreview}
          form={data.content.node.content.form}
          data={data.content.store}
        />

        <CheckoutModal
          isOpen={checkoutVisible}
          toggle={this.toggleCheckout}
          buttonTitle='Pay and Download Now'
          price={price}
          onResponse={this.onCheckout}
          profile={user.profile}
          processing={global.status[Types.BUY_DOCUMENT] === 'request'}
        />
      </section>
    )
  }
}

export default Detail
