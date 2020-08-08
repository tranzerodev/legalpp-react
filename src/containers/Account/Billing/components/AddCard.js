import React from 'react'

const AddCard = ({ onClick }) => {
  return (
    <div className="lg-card lg-card--add" onClick={onClick}>
      <div className="lg-card-content">
        <i className="fas fa-plus-circle mr-2" />New Card
      </div>
    </div>
  )
}

export default AddCard
