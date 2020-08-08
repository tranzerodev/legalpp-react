import React from 'react'

import cn from 'classname'
import './styles.css'

const TabButton = ({ children, onClick, style, active, className }) => {
  return (
    <div
      className={cn('lg-tab-button', { 'lg-tab-button--active': active }, className)}
      onClick={onClick}
      style={style}
    >
      { children }
    </div>
  )
}

export default TabButton