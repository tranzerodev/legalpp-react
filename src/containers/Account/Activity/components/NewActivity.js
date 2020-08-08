import React from 'react'
import cn from 'classname'

const NewActivity = ({ className }) => {
  return (
    <div className={cn('lg-activity-card', className)}>
      <div className="lg-new-activity__icons">
        <i className="fas fa-plus-circle icon" />
      </div>
      <div className="lg-new-activity__text">
        Start New Topic
      </div>
    </div>
  )
}

export default NewActivity
