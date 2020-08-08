import React from 'react'

import Button from 'components/Button'
import FeedbackThank from './FeedbackThank'
import './styles.css'

export default class Feedback extends React.Component {
  state = {
    type: 'feedback',
    purpose: 'topic',
    satisify: 'best',
    description: '',
    visibleThank: false
  }

  onChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const { type, purpose, satisify, description } = this.state
    this.props.submit({
      type,
      purpose,
      satisify,
      description
    })
    this.showThank()
  }

  showThank = () => {
    this.setState(prevState => ({
      visibleThank: !prevState.visibleThank
    }))
  }

  render () {
    const { type, purpose, satisify, description, visibleThank } = this.state
    const { history } = this.props

    return (
      <div className='lg-feedback-container'>
        <form className='lg-feedback-survey' onSubmit={this.onSubmit}>
          <h2>How are we doing?</h2>
          <p>
            We're always working to improve the Legal Maven experience, so we'd
            love to hear what's working and how we can do better.
          </p>
          <p>
            <strong>This isn't a way to contact us, though.</strong> We can't
            respond to feedback or bug reports individually. If you have a
            question or need help resolving a problem, you can{' '}
            <a href='mailto:support@legalmaven.com'>contact us</a>.
          </p>

          <div className='lg-form-item'>
            <label>What would you like to do?</label>
            <select value={type} onChange={this.onChange('type')}>
              <option value='feedback'>Give product feedback</option>
              <option value='report'>Report a bug</option>
            </select>
          </div>

          <div className='lg-form-item'>
            <label>I'm using Legal Maven for:</label>
            <select value={purpose} onChange={this.onChange('purpose')}>
              <option value='question'>
                Finding answers to my legal questions
              </option>
              <option value='form'>Obtaining legal forms</option>
              <option value='another'>Another reason</option>
            </select>
          </div>

          <div className='lg-form-item'>
            <label>How satisfied are you with your experience?</label>
            <select value={satisify} onChange={this.onChange('satisify')}>
              <option value='best'>Very satisfied</option>
              <option value='normal'>Satisified</option>
              <option value='worse'>A little satisified</option>
              <option value='worst'>Not satisfied</option>
            </select>
          </div>

          <div className='lg-form-item'>
            <label>Tell us a little more...</label>
            <textarea
              rows='4'
              required
              value={description}
              onChange={this.onChange('description')}
            />
          </div>
          <div className='text-center'>
            <Button type='submit'>Submit Feedback</Button>
          </div>
        </form>

        <FeedbackThank
          isOpen={visibleThank}
          toggle={this.showThank}
          changeRoute={history.push}
        />
      </div>
    )
  }
}
