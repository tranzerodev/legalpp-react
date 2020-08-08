import { invokeApiWithIdentity } from 'utils/invokeApi'
import { api } from 'configs'

export function saveActivity(data) {
  return invokeApiWithIdentity(null, api.saveActivity, 'POST', data)
}

export function getActivity(activityId) {
  return invokeApiWithIdentity({ activityId }, api.getActivity, 'GET')
}

export function getActivities(type) {
  return invokeApiWithIdentity(null, api.getActivities, 'GET', null, {
    queryParams: {
      type,
    }
  })
}

export function deleteActivity(activityId) {
  return invokeApiWithIdentity({ activityId }, api.deleteActivity, 'DELETE')
}
