import { globalSaga } from './global'
import { programSaga } from './program'
import { userSaga } from './user'
import { activitySaga } from './activity'
import { documentSaga } from './document'
import { paymentSaga } from './payment'
import { feedbackSaga } from './feedback'

export default [
  userSaga,
  globalSaga,
  programSaga,
  activitySaga,
  documentSaga,
  paymentSaga,
  feedbackSaga
]
