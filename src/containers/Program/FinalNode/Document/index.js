import React from 'react'
import { Modal, ModalHeader } from 'reactstrap'
import Document from './Document'

const DocumentModal = ({ isOpen, toggle, form, data }) => (
  <Modal isOpen={isOpen} toggle={toggle} className='document-modal'>
    <ModalHeader toggle={toggle} />
    <Document form={form} data={data} />
  </Modal>
)

export default DocumentModal
