import InputBox from './InputBox'
import { connect } from 'react-redux'
import { Creators } from 'redux/actions/program'

const mapStateToProps = state => {
  return {
    progress: state.program.progress
  }
}

const mapDispatchToProps = {
  stepNext: Creators.stepNext,
  stepBack: Creators.stepBack
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBox)
