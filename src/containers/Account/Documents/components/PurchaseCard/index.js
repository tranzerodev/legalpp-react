import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import cn from 'classname'

// import ProgressBar from 'components/ProgressBar'
import Button from 'components/Button'

const PurchaseCard = ({ purchase, className, onDelete, onDownload, ...props }) => {
  return (
    <div className={cn('lg-document-card flex-column flex-md-row', className)} {...props}>
      <div className="d-flex flex-row">
        <div className="lg-document-card__view d-none d-md-flex">
          <i className="far fa-file-alt icon" />
        </div>

        <div className="lg-document-card__content mr-5">
          <span className="lg-document-card__title">{ purchase.activityName }</span>
          <span className="lg-document-card__description my-1">{ purchase.document.description }</span>
          <span className="lg-document-card__description">Purchased: { moment(purchase.createdAt).format('MMMM DD, YYYY, h:mm:ss A') }</span>
        </div>
      </div>

      <div className="lg-document-card__actions flex-row flex-md-column mt-3 mt-md-0 mr-3 align-items-center align-items-md-end">
        <div className="d-inline-block mr-4 mr-md-0">
          <span className="lg-document__link px-1" onClick={() => onDelete(purchase.chargeId)}>Delete</span>
        </div>
        <Button className="mb-1" size="small" onClick={onDownload}>Download</Button>
      </div>    
    </div>
  )
}

PurchaseCard.propTypes = {
  purchase: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDownload: PropTypes.func.isRequired,
}

export default PurchaseCard
