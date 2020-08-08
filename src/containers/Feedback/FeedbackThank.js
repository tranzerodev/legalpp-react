import React from 'react'

import Button from 'components/Button'
import { Modal, ModalHeader } from 'reactstrap'

import './styles.css'

export default class Feedback extends React.Component {
  toSurvey = () => {
    const { toggle, changeRoute } = this.props
    toggle()
    changeRoute('/feedback')
  }

  backToHomePage = () => {
    const { toggle, changeRoute } = this.props
    toggle()
    changeRoute('/')
  }

  render () {
    const { isOpen, toggle } = this.props
    return (
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        centered
        modalClassName='lg-feedback-modal'
      >
        <ModalHeader toggle={toggle} />
        <div className='lg-feedback-thank'>
          <div>
            <h2>Thank you for your feedback!</h2>
            <p>
              We are trying to make Legal Maven even better for our users. Your
              feedback will help us improve your experience.
            </p>
            <p>Thanks,</p>
            <p>The Legal Maven Team</p>
          </div>
          <div className='lg-footer'>
            <Button onClick={this.backToHomePage}>Back to Home Page</Button>
          </div>
        </div>
      </Modal>
    )
  }
}
