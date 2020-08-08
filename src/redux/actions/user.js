import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getCurrentUser: null,
  signUp: ['data'],
  signIn: ['username', 'password'],
  signOut: null,
  resendCode: ['username'],
  forgotPassword: ['username'],
  confirmPassword: ['username', 'code', 'newPassword'],
  socialLogin: ['provider', 'response', 'user'],
  getProfile: null,
  saveProfile: ['data'],
}, {})

export {
  Types,
  Creators,
}
