import List from './List'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/document'
import { Creators as PaymentCreators } from 'redux/actions/payment'
import { Creators as ProgramCreators } from 'redux/actions/program'
import { push } from 'react-router-redux'

const mapStateToProps = state => {
  return {
    user: state.user,
    document: state.document,
    payment: state.payment,
    global: state.global
  }
}

const mapDispatchToProps = {
  getDocuments: Creators.getDocuments,
  deleteDocument: Creators.deleteDocument,
  updateProgress: ProgramCreators.updateProgress,
  getPurchases: PaymentCreators.getPurchases,
  deletePurchase: PaymentCreators.deletePurchase,
  getDownloadUrl: PaymentCreators.getDownloadUrl,
  changeRoute: push
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
