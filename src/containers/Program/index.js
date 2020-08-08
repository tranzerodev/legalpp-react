import Program from './Program'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Creators } from 'redux/actions/program'
import { Creators as activityCreators } from 'redux/actions/activity'
import { Creators as feedbackCreators } from 'redux/actions/feedback'

const mapStateToProps = state => {
  return {
    program: state.program,
    user: state.user,
    global: state.global
  }
}

const mapDispatchToProps = {
  setCurrent: Creators.setCurrent,
  stepNext: Creators.stepNext,
  stepBack: Creators.stepBack,
  loadActivity: Creators.loadActivity,
  setCurrentActivity: activityCreators.setCurrentActivity,
  showFeedback: feedbackCreators.setVisibility,
  changeRoute: push
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Program)
