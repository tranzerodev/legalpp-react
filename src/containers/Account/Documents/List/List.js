import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import download from 'downloadjs'

import TabButton from 'components/TabButton'
import OverlaySpinner from 'components/OverlaySpinner'
import Modal from 'components/Modal'

import NewDocument from '../components/NewDocument'
import DocumentCard from '../components/DocumentCard'
import PurchaseCard from '../components/PurchaseCard'

import { Types } from 'redux/actions/document'
import { Types as ProgramTypes } from 'redux/actions/program'
import { Types as PaymentTypes } from 'redux/actions/payment'

class List extends Component {
  state = {
    onlyPurchased: false,
    confirmVisible: false,
    id: null
  }

  componentDidMount () {
    this.props.getDocuments()
    AOS.init()
  }

  componentWillReceiveProps ({ global, payment }) {
    if (
      global.status[PaymentTypes.GET_DOWNLOAD_URL] === 'success' &&
      this.props.global.status[PaymentTypes.GET_DOWNLOAD_URL] === 'request'
    ) {
      download(payment.res.url)
      if (payment.res.document.id === 'ca_llc') {
        download(
          'https://s3-us-west-2.amazonaws.com/legalmaven-templates/Filing+Instructions+-+Corp.pdf'
        )
      }
    }
  }

  setOnlyPurchased = onlyPurchased => {
    if (onlyPurchased) {
      const { payment, getPurchases } = this.props
      if (payment.purchases.length === 0) {
        getPurchases()
      }
    } else {
    }
    this.setState({ onlyPurchased: onlyPurchased })
  }

  toggleConfirm = () => {
    this.setState({ confirmVisible: !this.state.confirmVisible })
  }

  confirmDelete = id => {
    this.setState({ id }, () => {
      this.toggleConfirm()
    })
  }

  onDelete = () => {
    const { id, onlyPurchased } = this.state
    const { deleteDocument, deletePurchase } = this.props
    this.toggleConfirm()
    if (onlyPurchased) {
      deletePurchase(id)
    } else {
      deleteDocument(id)
    }
  }

  onContinue = document => {
    this.props.updateProgress(document.content)
    this.props.changeRoute(
      `/programs/${document.program.id}?activity=${document.activityId}`
    )
  }

  onDownload = purchase => {
    this.props.getDownloadUrl(purchase.chargeId)
  }

  render () {
    const { onlyPurchased, confirmVisible } = this.state
    const { document, payment, global } = this.props

    return (
      <section className='lg-documents container'>
        <Link to='/#forms'>
          <NewDocument className='my-3' />
        </Link>

        <header className='d-flex mt-3'>
          <TabButton
            className='m-2'
            onClick={() => this.setOnlyPurchased(false)}
            active={!onlyPurchased}
          >
            All Documents
          </TabButton>
          <TabButton
            className='m-2 ml-3'
            active={onlyPurchased}
            onClick={() => this.setOnlyPurchased(true)}
          >
            Purchased
          </TabButton>
        </header>

        <section>
          {onlyPurchased
            ? payment.purchases.map(e => (
              <PurchaseCard
                key={e.chargeId}
                purchase={e}
                onDownload={() => this.onDownload(e)}
                onDelete={this.confirmDelete}
                data-aos='fade'
                  // data-aos-duration="1000"
                data-aos-easing='ease-in-out'
                data-aos-once
                />
              ))
            : document.documents.map(e => (
              <DocumentCard
                key={e.activityId}
                document={e}
                onContinue={() => this.onContinue(e)}
                onDelete={this.confirmDelete}
                data-aos='fade'
                  // data-aos-duration="1000"
                data-aos-easing='ease-in-out'
                data-aos-once
                />
              ))}
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
            global.status[Types.GET_DOCUMENTS] === 'request' ||
              global.status[Types.DELETE_DOCUMENT] === 'request' ||
              global.status[ProgramTypes.UPDATE_PROGRESS] === 'request' ||
              global.status[PaymentTypes.GET_PURCHASES] === 'request' ||
              global.status[PaymentTypes.DELETE_PURCHASE] === 'request' ||
              global.status[PaymentTypes.GET_DOWNLOAD_URL] === 'request'
          }
        />
      </section>
    )
  }
}

export default List
