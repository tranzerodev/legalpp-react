import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  setCurrentDocument: ['current'],
  getDocuments: null,
  getDocument: ['activityId'],
  updateDocument: ['store'],
  renameDocument: ['name'],
  deleteDocument: ['activityId'],
})

export { Types, Creators }
