import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getScript: ['id'],
  setCurrent: ['id'],
  stepNext: ['nextId', 'store'],
  stepBack: null,
  runAction: null,
  updateProgress: ['payload'],
  loadActivity: ['activityId'],
})

export { Types, Creators }
