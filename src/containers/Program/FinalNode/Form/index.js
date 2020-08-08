import Form from './Form'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/payment'
import { Creators as FeedbackCreators } from 'redux/actions/feedback'

const mapStateToProps = state => {
  return {
    user: state.user,
    global: state.global,
    payment: state.payment
  }
}

const mapDispatchToProps = {
  buyDocument: Creators.buyDocument,
  getDownloadUrl: Creators.getDownloadUrl,
  showFeedback: FeedbackCreators.setVisibility
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
