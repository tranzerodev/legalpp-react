import Root from './Root'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/user'
import { Creators as FeedbackCreators } from 'redux/actions/feedback'

const mapStateToProps = state => {
  return {
    user: state.user,
    global: state.global,
    feedback: state.feedback
  }
}

const mapDispatchToProps = {
  getCurrentUser: Creators.getCurrentUser,
  signOut: Creators.signOut,
  showFeedback: FeedbackCreators.setVisibility
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
