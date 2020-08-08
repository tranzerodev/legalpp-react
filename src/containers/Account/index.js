import Account from './Account'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
