import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  updateState: ['payload'],
})

export { Types, Creators }
