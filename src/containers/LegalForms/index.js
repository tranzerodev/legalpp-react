import LegalForms from './LegalForms'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Creators } from 'redux/actions/activity'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    activity: state.activity,
    global: state.global,
  }
}

const mapDispatchToProps = {
  getActivities: Creators.getActivities,
  changeRoute: push,
}

export default connect(mapStateToProps, mapDispatchToProps)(LegalForms)
