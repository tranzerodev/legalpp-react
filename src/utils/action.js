export const request = (type) => `${type}/request`
export const success = (type) => `${type}/success`
export const failure = (type) => `${type}/failure`

const SUFFIX_LENGTH = 8
export const origin = (type) => type.substr(0, type.length - SUFFIX_LENGTH)

export const requestCreator = (type, payload) => ({
  type: request(type),
  payload,
})

export const successCreator = (type, payload) => ({
  type: success(type),
  payload,
})

export const failureCreator = (type, payload) => ({
  type: failure(type),
  payload,
})