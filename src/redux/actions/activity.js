import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  saveActivity: ['id', 'content', 'name'],
  setCurrentActivity: ['activity'],
  getActivities: null,
  getActivity: ['activityId'],
  deleteActivity: ['activityId'],
})

export { Types, Creators }
