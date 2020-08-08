import Detail from './Detail'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/document'
import { Creators as PaymentCreators } from 'redux/actions/payment'
import { Creators as FeedbackCreators } from 'redux/actions/feedback'
import { push } from 'react-router-redux'

const mapStateToProps = state => {
  return {
    user: state.user,
    document: state.document,
    global: state.global,
    payment: state.payment
  }
}

const mapDispatchToProps = {
  getDocument: Creators.getDocument,
  updateDocument: Creators.updateDocument,
  deleteDocument: Creators.deleteDocument,
  renameDocument: Creators.renameDocument,
  buyDocument: PaymentCreators.buyDocument,
  getDownloadUrl: PaymentCreators.getDownloadUrl,
  showFeedback: FeedbackCreators.setVisibility,
  changeRoute: push
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
