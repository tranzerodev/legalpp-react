import Cards from './Cards'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/payment'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    global: state.global,
    payment: state.payment,
  }
}

const mapDispatchToProps = {
  createCustomerCard: Creators.createCustomerCard,
  deleteCustomerCard: Creators.deleteCustomerCard,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
