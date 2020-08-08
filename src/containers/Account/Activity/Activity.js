import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import TabButton from 'components/TabButton'
import OverlaySpinner from 'components/OverlaySpinner'
import Modal from 'components/Modal'

import NewActivity from './components/NewActivity'
import ActivityCard from './components/ActivityCard'

import { Types } from 'redux/actions/activity'
import { Types as ProgramTypes } from 'redux/actions/program'

import './styles.css'

class Activity extends Component {
  state = {
    confirmVisible: false,
    activityId: null
  }

  componentDidMount () {
    this.props.getActivities()
    AOS.init()
  }

  toggleConfirm = () => {
    this.setState({ confirmVisible: !this.state.confirmVisible })
  }

  confirmDelete = activityId => {
    this.setState({ activityId }, () => {
      this.toggleConfirm()
    })
  }

  onDelete = () => {
    const { activityId } = this.state
    const { deleteActivity } = this.props
    this.toggleConfirm()
    deleteActivity(activityId)
  }

  onContinue = activity => {
    this.props.updateProgress(activity.content)
    this.props.changeRoute(
      `/programs/${activity.program.id}?activity=${activity.activityId}`
    )
  }

  render () {
    const { confirmVisible } = this.state
    const { activity, global } = this.props

    return (
      <section className='lg-activites container'>
        <Link to='/#topics'>
          <NewActivity className='my-3' />
        </Link>

        <header className='d-flex mt-3'>
          <TabButton className='m-2' active>
            All Activities
          </TabButton>
        </header>

        <section>
          {activity.activities.map(e => (
            <ActivityCard
              key={e.activityId}
              activity={e}
              onContinue={() => this.onContinue(e)}
              onDelete={this.confirmDelete}
              data-aos='fade'
              // data-aos-duration="1000"
              data-aos-easing='ease-in-out'
              data-aos-once
            />
          ))}
        </section>

        <Modal.Confirm
          isOpen={confirmVisible}
          toggle={this.toggleConfirm}
          title={'Delete'}
          text={'Are you sure to delete the activity?'}
          onOK={this.onDelete}
        />

        <OverlaySpinner
          visible={
            global.status[Types.GET_ACTIVITIES] === 'request' ||
            global.status[Types.DELETE_ACTIVITY] === 'request' ||
            global.status[ProgramTypes.UPDATE_PROGRESS] === 'request'
          }
        />
      </section>
    )
  }
}

export default Activity
