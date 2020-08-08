import React from 'react'
import cn from 'classname'

const NewDocument = ({ className }) => {
  return (
    <div className={cn('lg-document-general-info-card', className)}>
      <div className="lg-new-document__icons">
        <i className="fas fa-plus-circle icon" />
      </div>
      <div className="lg-new-document__text">
        Create New Document
      </div>
    </div>
  )
}

export default NewDocument
