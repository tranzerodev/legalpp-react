import invokeApi, { invokeApiWithIdentity } from 'utils/invokeApi'
import { api } from 'configs'

export function buy (nonce, buyer, document) {
  return invokeApi(
    null,
    api.buyUnauthorized,
    'POST',
    {},
    { nonce, buyer, document }
  )
}

export function buyWithIdentity (nonce, buyer, document) {
  return invokeApiWithIdentity(null, api.buyAuthorized, 'POST', {
    nonce,
    buyer,
    document
  })
}

export function getDownloadUrl (chargeId) {
  return invokeApi({ chargeId }, api.getDownloadUrlUnauthorized, 'GET', {})
}

export function getDownloadUrlWithIdentity (chargeId) {
  return invokeApiWithIdentity(
    { chargeId },
    api.getDownloadUrlAuthorized,
    'Get'
  )
}

export function getPurchases () {
  return invokeApiWithIdentity(null, api.getPurchases, 'GET')
}

export function deletePurchase (chargeId) {
  return invokeApiWithIdentity({ chargeId }, api.deletePurchase, 'DELETE')
}

export function createCustomer (email) {
  return invokeApiWithIdentity(null, api.createCustomer, 'POST', { email })
}

export function getCustomer (customerId) {
  return invokeApiWithIdentity({ customerId }, api.getCustomer, 'GET')
}

export function createCustomerCard (customerId, cardNonce, postalCode) {
  return invokeApiWithIdentity({ customerId }, api.createCustomerCard, 'POST', {
    cardNonce,
    postalCode
  })
}

export function deleteCustomerCard (customerId, cardId) {
  return invokeApiWithIdentity(
    { customerId, cardId: btoa(cardId) },
    api.deleteCustomerCard,
    'DELETE'
  )
}
