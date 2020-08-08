import Billing from './Billing'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/payment'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    global: state.global,
  }
}

const mapDispatchToProps = {
  getCustomer: Creators.getCustomer,
}

export default connect(mapStateToProps, mapDispatchToProps)(Billing)
