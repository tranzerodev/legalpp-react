import React from 'react'
import { Modal } from 'reactstrap'

import CardInput from './CardInput'

const CardInputModal = ({
  isOpen,
  toggle,
  onResponse,
  onlyCard,
  price,
  buttonTitle,
  processing,
  profile
}) => {
  const onToggle = () => {
    if (processing) {
      return
    }

    toggle()
  }

  return (
    <Modal isOpen={isOpen} toggle={onToggle}>
      <i className='fas fa-times lg-modal__close-button' onClick={onToggle} />
      <CardInput
        onResponse={onResponse}
        onlyCard={onlyCard}
        price={price}
        buttonTitle={buttonTitle}
        processing={processing}
        profile={profile}
      />
    </Modal>
  )
}

export default CardInputModal
