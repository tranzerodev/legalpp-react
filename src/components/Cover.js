import React from 'react'
import PropTypes from 'prop-types'

const Cover = ({ title, icon, description, style, onClick }) => {
  return (
    <div className="cover" style={style} onClick={onClick}>
      <div className="cover__title">
        { title }
      </div>
      <div className="cover__icon">
        <i className={ icon } />
      </div>
      <div className="cover__description">
        { description }
      </div>
    </div>
  )
}

Cover.prototype = {
  title: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
}

export default Cover