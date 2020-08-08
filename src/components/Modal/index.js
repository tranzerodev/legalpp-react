import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'reactstrap'
import Button from 'components/Button'
import './styles.css'

const LGModal = {}

const Confirm = ({ isOpen, toggle, title, text, onOK, onCancel, okText, cancelText }) => {
  const handleCancel = () => {
    toggle()
    if (onCancel) onCancel()
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="lg-modal">
      <section className="lg-modal__header">
        { title }
        <i className="fas fa-times lg-modal__close-button" onClick={toggle} />
      </section>
      <section className="lg-modal__body">
        { text }
      </section>
      <section className="lg-modal__footer">
        <Button size="small" onClick={onOK}>{ okText }</Button>
        <Button size="small" onClick={handleCancel}>{ cancelText }</Button>
      </section>
    </Modal>
  )
}

Confirm.defaultProps = {
  title: 'Legal Maven',
  okText: 'Yes',
  cancelText: 'No',
}

Confirm.propTypes = {
  isOpen: PropTypes.bool,
  onOK: PropTypes.func,
  onCancel: PropTypes.func,
  toggle: PropTypes.func,
  okText: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  cancelText: PropTypes.string,
}

LGModal.Confirm = Confirm

export default LGModal