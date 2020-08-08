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
        <div className='lg-feedback-ask'>
          <div>
            <h2>Hi,</h2>
            <p>
              Thanks for using Legal Maven. We appreciate you choosing Legal
              Maven for your legal needs.
            </p>
            <p>
              To help us improve, we'd like to ask you a few questions about
              your experience so far. It'll only take 3 minutes, and your answer
              will help us make Legal Maven even better for you and other users.
            </p>
            <p>Thanks,</p>
            <p>The Legal Maven Team</p>
          </div>
          <div className='lg-footer'>
            <Button onClick={this.backToHomePage}>Back to Home Page</Button>
            <Button onClick={this.toSurvey}>Take the Survey</Button>
          </div>
        </div>
      </Modal>
    )
  }
}
