import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classname'
import { ThreeBounce } from 'better-react-spinkit'

const Button = ({
  className,
  type,
  onClick,
  style,
  children,
  size,
  fullWidth,
  loading,
  spinnerColor,
  transparent,
  disabled,
  flat,
  ...props
}) => {
  return (
    <button
      className={cn(
        'button',
        { small: size === 'small' },
        { medium: size === 'medium' },
        { 'full-width': fullWidth },
        { 'button--transparent': transparent },
        { 'button--disabled': disabled },
        { 'button--flat': flat },
        className
      )}
      type={type || 'button'}
      onClick={onClick}
      style={style}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className='loading'>
          <ThreeBounce size={16} color={spinnerColor || 'white'} />
        </div>
      ) : (
        children
      )}
    </button>
  )
}

Button.protoTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.children,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  borderless: PropTypes.bool
}

export default Button
