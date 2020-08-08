import React from 'react'
import PropTypes from 'prop-types'
import reactHtmlParser from 'react-html-parser'
import { Modal } from 'reactstrap'
import Button from 'components/Button'

const NoteDialog = ({ isOpen, toggle, note }) => {
  if (!note) return null
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="note-modal">
      <section className="header">
        { reactHtmlParser(note.title) }
        <i className="fas fa-times close-button" onClick={toggle} />
      </section>
      <section className="body">
        { reactHtmlParser(note.content) }
      </section>
      <section className="footer">
        <Button size="small" onClick={toggle}>OK</Button>
        {/* <Button size="small" className="ml-2">Need Help</Button> */}
      </section>
    </Modal>
  )
}

NoteDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  note: PropTypes.object,
}

export default NoteDialog