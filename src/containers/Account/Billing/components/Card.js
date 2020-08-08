import React from 'react'

const logoUrl = {
  'VISA': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/80px-Visa_Inc._logo.svg.png',
  'MASTERCARD': 'https://www.mastercard.com/content/dam/mccom/en-ae/Logo/ma-homepage-mobile-logo-103x45.png',
  'AMERICAN_EXPRESS': 'https://www.aexp-static.com/nav/ngn/img/logo_bluebox-55x54.svg',
  'DISCOVER': 'https://www.discover.com/global/images/discover-logo.png',
  'JCB': 'https://www.global.jcb/en/common/images/svg/jcb_emblem.svg',
  'CHINA_UNIONPAY': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UnionPay_logo.svg/80px-UnionPay_logo.svg.png',
}

const Card = ({ card, onDelete }) => {
  return (
    <div className="lg-card">
      <img className="lg-card-brand" src={logoUrl[card.card_brand]} alt={card.card_brand}/>
      <div className="lg-card-number">
        <strong>•••• •••• •••• </strong>{ card.last_4 }
      </div>
      <div className="lg-card-expire">
        { card.exp_month } / { card.exp_year }
      </div>
      <div className="lg-card-action" onClick={onDelete}>
        <i className="fas fa-trash-alt" />
      </div>
    </div>
  )
}

export default Card
