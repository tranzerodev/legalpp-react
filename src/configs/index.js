export const app = {
  logoText: 'LEGAL MAVEN',
  prefix: 'legalMaven',
  alertUncaughted: true,
  alertFailure: true
}

export const api = {
  baseUrl: 'https://04hkob0icl.execute-api.us-west-2.amazonaws.com/dev',
  region: 'us-west-2',
  getActivity: '/activities/{activityId}',
  getActivities: '/activities',
  saveActivity: '/activities/save',
  deleteActivity: '/activities/{activityId}',
  buyAuthorized: '/payment/buyAuthorized',
  buyUnauthorized: '/payment/buyUnauthorized',
  getPurchases: '/payment/purchases',
  deletePurchase: '/payment/purchases/{chargeId}',
  getDownloadUrlAuthorized:
    '/payment/purchases/{chargeId}/downloadUrlAuthorized',
  getDownloadUrlUnauthorized:
    '/payment/purchases/{chargeId}/downloadUrlUnauthorized',
  createCustomer: '/payment/customers',
  getCustomer: '/payment/customers/{customerId}',
  createCustomerCard: '/payment/customers/{customerId}/cards',
  deleteCustomerCard: '/payment/customers/{customerId}/cards/{cardId}',
  submitFeedback: '/feedback'
}

export const facebook = {
  appId: '128968304375975'
}

export const google = {
  clientId:
    '1057707658731-er6vr8sf5psl1uh3sjtsio5t2ooaljpi.apps.googleusercontent.com'
}

export const square = {
  applicationId: 'sq0idp-vfATW726v_OmG_AxXxA-gQ',
  locationId: 'Z1RKDKGWACZDH'
}
