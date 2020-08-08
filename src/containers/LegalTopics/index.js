import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import WOW from 'wowjs'
import AOS from 'aos'
import { topics } from 'services/program'
import PageHeader from './components/PageHeader'

class LegalTopics extends Component {
  componentDidMount() {
    new WOW.WOW().init()
    AOS.init()
  }

  renderTopics = topics.map(category => {
    return (
      <div key={category.id} className="category">
        <div className="category-title">
          { category.title }
        </div>
        {
          category.topics.map(topic => {
            return (
              <Link key={topic.id} to={`/programs/${topic.id}`} className="topic">
                { topic.title }
              </Link>
            )
          })
        }
      </div>
    )
  })

  render() {
    return (
      <section className="legaltopics">
        <PageHeader />
        <div className="description-container" data-aos="fade-up" data-aos-duration="600">
          <div className="description">
            { "Let's get started, please select a topic." }
          </div>
        </div>
        <div className="topics-container container" data-aos="fade-up" data-aos-duration="600">
          { this.renderTopics }
        </div>
      </section>
    )
  }
}

export default LegalTopics