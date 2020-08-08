import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import cn from 'classname'

import Button from 'components/Button'

import svgIncorporate from 'assets/svgs/incorporate.svg'
import svgPayroll from 'assets/svgs/payroll.svg'
import svgTrademark from 'assets/svgs/trademark.svg'
import svgInsurance from 'assets/svgs/insurance.svg'

const icon = {
  'incorporate': svgIncorporate,
  'trademark': svgTrademark,
  'payroll': svgPayroll,
  'workerscomp': svgInsurance,
}

const ActivityCard = ({ activity, className, onDelete, onContinue, ...props }) => {
  return (
    <div className={cn('lg-activity-card flex-column flex-md-row', className)} {...props}>
      <div className="d-flex flex-row">
        <div className="lg-activity-card__view d-none d-md-flex">
          <img src={icon[activity.program.id]} className="icon" alt="logo" />
        </div>

        <div className="lg-activity-card__content mr-md-5">
          <span className="lg-activity-card__title">{ activity.activityName }</span>
          <span className="lg-activity-card__description my-1">{ activity.program.description }</span>
          <span className="lg-activity-card__description">Last Opened { moment(activity.updatedAt).format('MMMM DD, YYYY, h:mm:ss A') }</span>
        </div>
      </div>

      <div className="lg-activity-card__actions flex-row flex-md-column mt-3 mt-md-0 mr-3 align-items-center align-items-md-end">
        <div className="d-inline-block mr-4 mr-md-0">
          <span className="lg-activity__link px-1" onClick={() => onDelete(activity.activityId)}>Delete</span>
        </div>
        <Button className="mb-1" size="small" onClick={onContinue}>Continue</Button>
      </div>    
    </div>
  )
}

ActivityCard.propTypes = {
  activity: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
}

export default ActivityCard
