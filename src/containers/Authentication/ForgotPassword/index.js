import ForgotPassword from './ForgotPassword'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/user'

const mapStateToProps = (state) => {
  return {
    global: state.global,
  }
}

const mapDispatchToProps = {
  forgotPassword: Creators.forgotPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
