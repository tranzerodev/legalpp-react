import React, { Component } from 'react'
import WOW from 'wowjs'
import AOS from 'aos'

import Modal from 'components/Modal'
import PageHeader from './components/PageHeader'

import { forms } from 'services/program'

class LegalForms extends Component {
  state = {
    confirmVisible: false,
    currentTopic: null,
  }

  componentDidMount() {
    new WOW.WOW().init()
    AOS.init()

    const { activity, getActivities } = this.props
    if (!activity.activities.length)
      getActivities()
  }

  renderTopics = forms.map(category => {
    return (
      <div key={category.id} className="category">
        <div className="category-title">
          { category.title }
        </div>
        {
          category.topics.map(topic => {
            return (
              <span key={topic.id} className="topic" onClick={() => this.onSelectTopic(topic)}>
                { topic.title }
              </span>
            )
          })
        }
      </div>
    )
  })

  toggleConfirm = () => {
    this.setState({ confirmVisible: !this.state.confirmVisible })
  }

  onSelectTopic = (topic) => {
    const { activity, user } = this.props
    const isAuthenticated = user.authenticated
    this.setState({ currentTopic: topic }, () => {
      if (isAuthenticated && activity.activities.find(e => e.program.id === topic.id)) {
        this.toggleConfirm()
      } else {
        this.onStartNew()
      }
    })
  }

  onStartNew = () => {
    const { currentTopic } = this.state
    this.props.changeRoute(`/programs/${currentTopic.id}`)
  }

  onContinue = () => {
    const { currentTopic } = this.state
    this.toggleConfirm()
    this.props.changeRoute(`/account/documents?filter=${currentTopic.id}`)
  }

  render() {
    const { confirmVisible } = this.state
    return (
      <section className="legalforms">
        <PageHeader />
        <div className="description-container" data-aos="fade-up" data-aos-duration="600">
          <div className="description">
            { "Let's get started, please select a form." }
          </div>
        </div>
        <div className="topics-container container" data-aos="fade-up" data-aos-duration="600">
          { this.renderTopics }
        </div>

        <Modal.Confirm
          isOpen={confirmVisible}
          toggle={this.toggleConfirm}
          title={'Do you want to continue?'}
          text={'There are already saved forms. Do you want to continue?'}
          onOK={this.onContinue}
          onCancel={this.onStartNew}
        />
      </section>
    )
  }
}

export default LegalForms
