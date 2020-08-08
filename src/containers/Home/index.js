import Home from './Home'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Creators } from 'redux/actions/document'

const mapStateToProps = state => {
  return {
    user: state.user,
    documents: state.document,
    global: state.global
  }
}

const mapDispatchToProps = {
  getDocuments: Creators.getDocuments,
  changeRoute: push
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
