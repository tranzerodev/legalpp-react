import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  buyDocument: ['nonce', 'buyer', 'document'],
  getCustomer: ['customerId'],
  getPurchases: null,
  getDownloadUrl: ['chargeId'],
  deletePurchase: ['chargeId'],
  createCustomerCard: ['customerId', 'cardNonce', 'postalCode'],
  deleteCustomerCard: ['customerId', 'cardId']
})

export { Types, Creators }
