import { createReducer } from 'reduxsauce'
import { Types } from '../actions/payment'
import { success } from 'utils/action'

export const initialState = {
  customer: {
    cards: []
  },
  purchases: [],
}

const commonSuccess = (state, action) => {
  return {
    ...state,
    ...action.payload,
  }
}

const createCustomerCardSuccess = (state, action) => {
  return {
    customer: {
      ...state.customer,
      cards: [
        ...(state.customer.cards || []),
        action.payload.data.card,
      ]
    }
  }
}

const deletePurchaseSuccess = (state, action) => {
  const purchases = state.purchases.filter(
    purchase => purchase.chargeId !== action.payload.chargeId)

  return {
    ...state,
    purchases,
  }
}

const deleteCustomerCardSuccess = (state, action) => {
  return {
    customer: {
      ...state.customer,
      cards: state.customer.cards.filter(card => card.id !== action.payload.cardId)
    }
  }
}

const handlers = {
  [success(Types.BUY_DOCUMENT)]: commonSuccess,
  [success(Types.GET_PURCHASES)]: commonSuccess,
  [success(Types.GET_DOWNLOAD_URL)]: commonSuccess,
  [success(Types.DELETE_PURCHASE)]: deletePurchaseSuccess,
  [success(Types.GET_CUSTOMER)]: commonSuccess,
  [success(Types.CREATE_CUSTOMER_CARD)]: createCustomerCardSuccess,
  [success(Types.DELETE_CUSTOMER_CARD)]: deleteCustomerCardSuccess,
}

export default createReducer(initialState, handlers)
