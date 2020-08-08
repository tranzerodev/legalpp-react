import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classname'

import './styles.css'

const ProgressBar = ({ progress, style, className }) => {
  return (
    <div className={cn('lm-progressbar', className)} style={style}>
      <div className="lm-progressbar__progress" style={{ width: progress }} />
    </div>
  )
}

ProgressBar.propTypes = {
  // string represents percentage like '10%'
  progress: PropTypes.string.isRequired,
}

export default ProgressBar