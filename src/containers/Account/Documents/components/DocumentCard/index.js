import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import moment from 'moment'
import cn from 'classname'
import svgDocument from 'assets/svgs/documents.svg'

// import ProgressBar from 'components/ProgressBar'
import Button from 'components/Button'

const DocumentCard = ({
  document,
  className,
  onDelete,
  onContinue,
  ...props
}) => {
  return (
    <div
      className={cn('lg-document-card flex-column flex-md-row', className)}
      {...props}
    >
      <div className='d-flex flex-row'>
        <div className='lg-document-card__view d-none d-md-flex'>
          {/* <i className="far fa-file-alt icon" /> */}
          <img src={svgDocument} alt='' />
          {/* <Link onCli className="lg-document__link">View</Link> */}
        </div>

        <div className='lg-document-card__content mr-5'>
          <span className='lg-document-card__title'>
            {document.activityName}
          </span>
          <span className='lg-document-card__description my-1'>
            {document.program.description}
          </span>
          <span className='lg-document-card__description'>
            Last Opened:{' '}
            {moment(document.updatedAt).format('MMMM DD, YYYY, h:mm:ss A')}
          </span>
          {/* <ProgressBar progress={'10%'} className="mr-5 my-1" />
          <span className="lg-document-card__progress">10% Complete</span> */}
        </div>
      </div>

      <div className='lg-document-card__actions flex-row flex-md-column mt-3 mt-md-0 mr-3 align-items-center align-items-md-end'>
        <div className='d-inline-block mr-4 mr-md-0'>
          <Link
            to={`/account/documents/${document.activityId}`}
            className='lg-document__link px-1'
          >
            Edit
          </Link>
          <span className='lg-document__link'>{' | '}</span>
          <span
            className='lg-document__link px-1'
            onClick={() => onDelete(document.activityId)}
          >
            Delete
          </span>
        </div>
        <Button className='mb-1' size='small' onClick={onContinue}>
          Continue
        </Button>
      </div>
    </div>
  )
}

DocumentCard.propTypes = {
  document: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired
}

export default DocumentCard
