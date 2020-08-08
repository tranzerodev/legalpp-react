import Feedback from './Feedback'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/feedback'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {
  submit: Creators.submitFeedback
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feedback)
