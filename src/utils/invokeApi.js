import apigClientFactory from 'aws-api-gateway-client'
import { api } from 'configs'
import Auth from '@aws-amplify/auth'

export default function invokeApi (
  params,
  path,
  method = 'GET',
  auth,
  body = {},
  additional = {}
) {
  const apigClient = apigClientFactory.newClient({
    invokeUrl: api.baseUrl,
    ...auth
  })

  return apigClient
    .invokeApi(params, path, method, additional, body)
    .then(response => response.data)
}

/**
 * @description invoke lambda with cognito identity credentials
 *
 * @param {Object} params path or query params
 * @param {String} path api url
 * @param {String} method request method: one of 'get', 'post', 'put', 'delete'
 * @param {Object} body body params
 * @param {Object} additional additional params
 */
export function invokeApiWithIdentity (
  params,
  path,
  method = 'GET',
  body = {},
  additional = {}
) {
  return Auth.currentCredentials().then(credentials => {
    return invokeApi(
      params,
      path,
      method,
      {
        accessKey: credentials.accessKeyId,
        secretKey: credentials.secretAccessKey,
        sessionToken: credentials.sessionToken,
        region: api.region
      },
      body,
      additional
    )
  })
}
