import ResetPassword from './ResetPassword'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/user'

const mapStateToProps = (state) => {
  return {
    global: state.global,
  }
}

const mapDispatchToProps = {
  forgotPassword: Creators.forgotPassword,
  confirmPassword: Creators.confirmPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
