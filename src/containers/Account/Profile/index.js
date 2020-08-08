import Profile from './Profile'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/user'
import { push } from 'react-router-redux'

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile,
    global: state.global,
  }
}

const mapDispatchToProps = {
  getProfile: Creators.getProfile,
  saveProfile: Creators.saveProfile,
  changeRoute: push,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
