import AWS from 'aws-sdk'
import Auth from '@aws-amplify/auth'
import 'amazon-cognito-js'

export function getCurrentSession () {
  return Auth.currentSession()
}

export function signUp (data) {
  return Auth.signUp({
    username: data.email,
    password: data.password,
    attributes: {
      email: data.email,
      given_name: data.given_name,
      family_name: data.family_name
    }
  })
}

export function signIn (username, password) {
  return Auth.signIn(username, password)
}

export function resendCode (username) {
  return Auth.resendSignUp(username)
}

export function forgotPassword (username) {
  return Auth.forgotPassword(username)
}

export function confirmPassword (username, code, newPassword) {
  return Auth.forgotPasswordSubmit(username, code, newPassword)
}

export async function signOut () {
  return Auth.signOut()
}

export function syncData (data) {
  return new Promise((resolve, reject) => {
    Auth.currentCredentials()
      .then(credentials => {
        AWS.config.region = credentials._clientConfig.region
        AWS.config.credentials = credentials
        const client = new AWS.CognitoSyncManager()
        return client
      })
      .then(client => {
        client.openOrCreateDataset('Profile', (err, dataset) => {
          if (err) reject(err)
          else resolve(dataset)
        })
      })
  })
    .then(dataset => {
      const promises = []
      for (let x in data) {
        promises.push(
          new Promise((resolve, reject) => {
            dataset.put(x, data[x], (err, record) => {
              if (err) reject(err)
              else resolve({ dataset, record })
            })
          })
        )
      }
      return Promise.all(promises).then(response => dataset)
    })
    .then(dataset => {
      return new Promise((resolve, reject) => {
        dataset.synchronize({
          onSuccess: (dataset, newRecords) => resolve({ dataset, newRecords }),
          onFailure: err => reject(err),
          onConflict: (dataset, conflicts, callback) => {
            var resolved = []

            for (var i = 0; i < conflicts.length; i++) {
              // take local version.
              resolved.push(conflicts[i].resolveWithLocalRecord())
            }

            dataset.resolve(resolved, function () {
              return callback(true)
            })
          }
        })
      })
    })
}

export function readProfile () {
  return new Promise((resolve, reject) => {
    Auth.currentCredentials()
      .then(credentials => {
        AWS.config.region = credentials._clientConfig.region
        AWS.config.credentials = credentials
        const client = new AWS.CognitoSyncManager()
        return client
      })
      .then(client => {
        client.openOrCreateDataset('Profile', (err, dataset) => {
          if (err) reject(err)
          else resolve(dataset)
        })
      })
  })
    .then(dataset => {
      return new Promise((resolve, reject) => {
        dataset.getAllRecords((err, response) => {
          if (err) reject(err)
          else resolve(response)
        })
      })
    })
    .then(response => {
      const profile = {}
      response.forEach(e => {
        profile[e.key] = e.value
      })
      return profile
    })
}

/**
 * For federated login
 * @param {String} provider - federation login provider
 * @param {FederatedResponse} response - response should have the access token
 * the identity id (optional)
 * and the expiration time (the universal time)
 * @param {String} user - user info
 */
export function federatedSignIn (provider, response, user) {
  return Auth.federatedSignIn(provider, response, user)
}

export function getCurrentIdentity () {
  return Auth.currentCredentials()
}

export async function currentUserInfo () {
  return Auth.currentUserInfo()
}
