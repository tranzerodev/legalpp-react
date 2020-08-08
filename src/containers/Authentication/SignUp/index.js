import SignUp from './SignUp'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/user'

const mapStateToProps = (state) => {
  return {
    global: state.global,
  }
}

const mapDispatchToProps = {
  signUp: Creators.signUp,
  socialLogin: Creators.socialLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
