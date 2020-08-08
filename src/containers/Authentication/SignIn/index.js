import SignIn from './SignIn'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/user'

const mapStateToProps = (state) => {
  return {
    global: state.global,
  }
}

const mapDispatchToProps = {
  signIn: Creators.signIn,
  socialLogin: Creators.socialLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
