import React from 'react'
import './styles.css'

const Paper = ({ children, ...props }) => {
  return (
    <div className="paper" {...props}>
      { children }
    </div>
  )
}