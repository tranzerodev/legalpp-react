import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Modal } from 'reactstrap'
import Cover from 'components/Cover'
import Button from 'components/Button'

import { connect } from 'react-redux'
import { Creators } from 'redux/actions/feedback'

const TopicDialog = ({ isOpen, toggle, showFeedback }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className='final-topic-modal wow fadeIn'>
        <div className='final-modal__header'>Thank you !</div>
        <div className='final-modal__content'>
          <span className='message'>
            We hope you enjoyed your experience with us. Is there something else
            we may help you with?
          </span>
          <div className='actions'>
            <Link to='/'>
              <Cover
                title='NO'
                icon='fas fa-home'
                description='Go back to home page'
              />
            </Link>
            <Link to='/#topics'>
              <Cover
                title='YES'
                icon='fas fa-tasks'
                description='View other legal topics'
              />
            </Link>
          </div>
        </div>
        <div className='final-modal__footer'>
          <Button fullWidth onClick={() => showFeedback(true)}>
            <i className='fas fa-envelope' />
            &nbsp;LEAVE A COMMENT/MESSAGE
          </Button>
        </div>
      </div>
    </Modal>
  )
}

TopicDialog.protoTypes = {
  isOpen: PropTypes.bool.isRequired,
  toogle: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {
  showFeedback: Creators.setVisibility
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicDialog)
