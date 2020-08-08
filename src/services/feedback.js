import invokeApi from 'utils/invokeApi'
import { api } from 'configs'

export function submitFeedback (payload) {
  return invokeApi(null, api.submitFeedback, 'POST', {}, payload)
}
