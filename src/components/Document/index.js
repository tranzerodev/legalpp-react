import React from 'react'
import PropTypes from 'prop-types'
import reactHtmlParser from 'react-html-parser'
import cn from 'classname'

import imgBook from 'assets/images/book.png'

const Document = ({ title, icon, description, style, onClick, empty }) => {
  return (
    <div className={cn('document', { 'empty': empty })} onClick={onClick} style={style}>
      { !empty && <img className="back-img" src={ imgBook } alt="Back" /> }
      <div className="overlay" />
      <div className="document__title">
        { reactHtmlParser(title) }
      </div>
      <div className="document__icon">
        <i className={icon} />
      </div>
      <div className="document__description">
        { reactHtmlParser(description) }
      </div>
    </div>
  )
}

Document.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  emtpy: PropTypes.bool,
}

export default Document
