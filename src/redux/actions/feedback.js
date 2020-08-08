import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  submitFeedback: ['payload'],
  setVisibility: ['visible']
})

export { Types, Creators }
