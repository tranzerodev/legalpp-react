import React, { Component } from 'react'
import reactHtmlParser from 'react-html-parser'

// import TopicDialog from './TopicDialog'
import NoteDialog from '../../components/NoteDialog'
import Button from 'components/Button'

class FinalTopic extends Component {
  state = {
    // modalVisible: false,
    noteVisible: false,
    note: null
  }

  // toggleDialog = () => {
  //   this.setState({ modalVisible: !this.state.modalVisible })
  // }

  closeNote = () => {
    this.setState({ noteVisible: false })
  }

  openNote = (title, content) => {
    this.setState({ noteVisible: true, note: { title, content } })
  }

  render () {
    const { title, message, actions, prev, next, showFeedback } = this.props
    // const { changeRoute } = this.props

    let _actions = actions
      ? actions.map((action, index) => {
        if (action.kind === 'continue') {
          // next is in the same script
          return (
            <Button
              transparent
              key={index}
              onClick={() => next(action.next)}
              className='mx-3'
              size='small'
            >
              {action.title}
            </Button>
          )
        } else {
          // next is in another script
          return null
        }
      })
      : null

    return (
      <div className='inputbox final-topic wow fadeIn'>
        <h1 className='inputbox__title mt-2'>{title}</h1>
        <div className='final-body'>
          <p>{reactHtmlParser(message)}</p>
          <br />
          <div className='text-center'>{_actions}</div>
        </div>
        <div className='buttons mt-2 pt-4'>
          <Button className='mr-1' fullWidth onClick={prev}>
            Back
          </Button>
          <Button className='ml-1' fullWidth onClick={showFeedback}>
            Finish
          </Button>
        </div>

        {/* <TopicDialog
          isOpen={this.state.modalVisible}
          toggle={this.toggleDialog}
        /> */}
        <NoteDialog
          isOpen={this.state.noteVisible}
          toggle={this.closeNote}
          note={this.state.note}
        />
      </div>
    )
  }
}

export default FinalTopic
