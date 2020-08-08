import Activity from './Activity'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/activity'
import { Creators as ProgramCreators } from 'redux/actions/program'
import { push } from 'react-router-redux'

const mapStateToProps = state => {
  return {
    user: state.user,
    activity: state.activity,
    global: state.global
  }
}

const mapDispatchToProps = {
  getActivities: Creators.getActivities,
  deleteActivity: Creators.deleteActivity,
  updateProgress: ProgramCreators.updateProgress,
  changeRoute: push
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity)
