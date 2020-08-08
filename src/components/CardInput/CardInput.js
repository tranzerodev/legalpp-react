import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OverlaySpinner from 'components/OverlaySpinner'
import Button from 'components/Button'
import { notification } from 'antd'

import { square } from 'configs'
import './styles.css'

class CardInput extends Component {
  constructor (props) {
    super(props)

    const { profile } = props
    this.state = {
      loading: true,
      firstName: (profile && profile.givenName) || '',
      lastName: (profile && profile.familyName) || '',
      email: (profile && profile.email) || '',
      phoneNumber: (profile && profile.phone) || '',
      address: ''
    }
  }

  onChange = name => e => {
    this.setState({ [name]: e.target.value })
  }

  componentDidMount () {
    var _this = this

    const { onResponse } = this.props

    this.paymentForm = new window.SqPaymentForm({
      // Initialize the payment form elements
      applicationId: square.applicationId,
      locationId: square.locationId,
      inputClass: 'sq-input',

      // // Customize the CSS for SqPaymentForm iframe elements
      inputStyles: [
        {
          fontSize: '0.9em'
        }
      ],

      // Initialize Apple Pay placeholder ID
      // applePay: {
      //   elementId: 'sq-apple-pay'
      // },
      applePay: false,

      // Initialize Masterpass placeholder ID
      // masterpass: {
      //   elementId: 'sq-masterpass'
      // },
      masterpass: false,

      // Initialize the credit card placeholders
      cardNumber: {
        elementId: 'sq-card-number',
        placeholder: '•••• •••• •••• ••••'
      },
      cvv: {
        elementId: 'sq-cvv',
        placeholder: 'CVV'
      },
      expirationDate: {
        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY'
      },
      postalCode: {
        elementId: 'sq-postal-code'
      },

      // SqPaymentForm callback functions
      callbacks: {
        /*
         * callback function: methodsSupported
         * Triggered when: the page is loaded.
         */
        methodsSupported: function (methods) {
          var applePayBtn = document.getElementById('sq-apple-pay')
          var applePayLabel = document.getElementById('sq-apple-pay-label')
          var masterpassBtn = document.getElementById('sq-masterpass')
          var masterpassLabel = document.getElementById('sq-masterpass-label')

          // Only show the button if Apple Pay for Web is enabled
          // Otherwise, display the wallet not enabled message.
          if (methods.applePay === true) {
            applePayBtn.style.display = 'inline-block'
            applePayLabel.style.display = 'none'
          }
          // Only show the button if Masterpass is enabled
          // Otherwise, display the wallet not enabled message.
          if (methods.masterpass === true) {
            masterpassBtn.style.display = 'inline-block'
            masterpassLabel.style.display = 'none'
          }
        },

        /*
         * callback function: createPaymentRequest
         * Triggered when: a digital wallet payment button is clicked.
         */
        createPaymentRequest: function () {
          var paymentRequestJson
          /* ADD CODE TO SET/CREATE paymentRequestJson */
          return paymentRequestJson
        },

        /*
         * callback function: validateShippingContact
         * Triggered when: a shipping address is selected/changed in a digital
         *                 wallet UI that supports address selection.
         */
        validateShippingContact: function (contact) {
          var validationErrorObj
          /* ADD CODE TO SET validationErrorObj IF ERRORS ARE FOUND */
          return validationErrorObj
        },

        /*
         * callback function: cardNonceResponseReceived
         * Triggered when: SqPaymentForm completes a card nonce request
         */
        cardNonceResponseReceived: function (
          errors,
          nonce,
          cardData,
          billingContact,
          shippingContact
        ) {
          if (errors) {
            // Log errors from nonce generation to the Javascript console
            const errMsg = errors.reduce(
              (errMsg, err) => errMsg + '\n' + err.message,
              ''
            )

            notification['error']({
              message: 'Input Error',
              description: errMsg
            })

            return
          }

          const {
            firstName,
            lastName,
            email,
            phoneNumber,
            address
          } = _this.state
          onResponse({
            nonce,
            cardData,
            billingContact,
            shippingContact,
            customer: {
              firstName,
              lastName,
              email,
              phoneNumber,
              address
            }
          })
        },

        /*
         * callback function: unsupportedBrowserDetected
         * Triggered when: the page loads and an unsupported browser is detected
         */
        unsupportedBrowserDetected: function () {
          /* PROVIDE FEEDBACK TO SITE VISITORS */
        },

        /*
         * callback function: inputEventReceived
         * Triggered when: visitors interact with SqPaymentForm iframe elements.
         */
        inputEventReceived: function (inputEvent) {
          switch (inputEvent.eventType) {
            case 'focusClassAdded':
              /* HANDLE AS DESIRED */
              break
            case 'focusClassRemoved':
              /* HANDLE AS DESIRED */
              break
            case 'errorClassAdded':
              /* HANDLE AS DESIRED */
              break
            case 'errorClassRemoved':
              /* HANDLE AS DESIRED */
              break
            case 'cardBrandChanged':
              /* HANDLE AS DESIRED */
              break
            case 'postalCodeChanged':
              /* HANDLE AS DESIRED */
              break
            default:
              break
          }
        },

        /*
         * callback function: paymentFormLoaded
         * Triggered when: SqPaymentForm is fully loaded
         */
        paymentFormLoaded: function () {
          _this.setState({ loading: false })
        }
      }
    })

    this.paymentForm.build()
  }

  componentWillUnmount () {
    this.paymentForm.destroy()
  }

  onSubmit = event => {
    event.preventDefault()

    // Request a nonce from the SqPaymentForm object
    this.paymentForm.requestCardNonce()
  }

  render () {
    const {
      loading,
      firstName,
      lastName,
      email,
      phoneNumber,
      address
    } = this.state
    const { onlyCard, buttonTitle, processing, price /* profile */ } = this.props
    return (
      <div className='lg-checkout-form'>
        <form id='nonce-form' onSubmit={this.onSubmit}>
          <h2 className='lg-title'>Please enter your payment information.</h2>
          <div className='container'>
            {!onlyCard && (
              <div className='row'>
                <div className='col-6'>
                  <div className='lg-label'>First Name *</div>
                  <input
                    className='sq-input mb-2'
                    placeholder='First Name'
                    value={firstName}
                    onChange={this.onChange('firstName')}
                    required
                  />
                </div>
                <div className='col-6'>
                  <div className='lg-label'>Last Name *</div>
                  <input
                    className='sq-input mb-2'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={this.onChange('lastName')}
                    required
                  />
                </div>
                <div className='col-6'>
                  <div className='lg-label'>Email Address *</div>
                  <input
                    className='sq-input mb-2'
                    placeholder='Email Address'
                    value={email}
                    onChange={this.onChange('email')}
                    required
                  />
                </div>
                <div className='col-6'>
                  <div className='lg-label'>Phone Number</div>
                  <input
                    className='sq-input mb-2'
                    placeholder='Phone Number'
                    value={phoneNumber}
                    onChange={this.onChange('phoneNumber')}
                  />
                </div>
                <div className='col-12'>
                  <div className='lg-label'>Address</div>
                  <input
                    className='sq-input mb-2'
                    placeholder='Address'
                    value={address}
                    onChange={this.onChange('address')}
                  />
                </div>
              </div>
            )}

            <div className='row'>
              <div className='col-8'>
                <div className='lg-label'>Card Number *</div>
                <div id='sq-card-number' />
              </div>
              <div className='col-4'>
                <div className='lg-label'>Expiration *</div>
                <div id='sq-expiration-date' />
              </div>
              <div className='col-6'>
                <div className='lg-label'>CVV *</div>
                <div id='sq-cvv' />
              </div>
              <div className='col-6'>
                <div className='lg-label'>ZIP Code *</div>
                <div id='sq-postal-code' />
              </div>
            </div>

            <div className='row'>
              <div className='col-12 p-3 text-center'>
                {!onlyCard && <h6>Total Due: ${price.toFixed(2)}</h6>}
              </div>
              <div className='col-12 text-center'>
                <Button type='submit' fullWidth id='sq-creditcard' flat>
                  {buttonTitle}
                </Button>
                {/* {profile ? (
                  <Button
                    className='lg-add-card-button mt-2'
                    type='submit'
                    fullWidth
                    id='sq-creditcard'
                    flat
                  >
                    Save this card for Later
                  </Button>
                ) : null} */}
              </div>

              <div className='col-12 my-3'>
                <div className='lg-support-cards px-5 text-center'>
                  <img
                    src='https://dk3tkp298wpu.cloudfront.net/assets/6384d5f524c64899054.png'
                    alt='Support Cards'
                  />
                </div>
                {!onlyCard && (
                  <div className='lg-ssl-trust px-1 px-md-5 mt-4'>
                    <img
                      className='lg-ssl-img mr-3'
                      src='https://www.ssltrust.com.au/assets/images/logo.png'
                      alt='SSL Trust'
                    />
                    <span className='lg-ssl-text'>
                      <strong>Legal Maven</strong> uses SSL encryption to
                      protect your payment information
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>

        <OverlaySpinner visible={loading || processing} />
      </div>
    )
  }
}

CardInput.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  onlyCard: PropTypes.bool,
  processing: PropTypes.bool
}

CardInput.defaultProps = {
  buttonTitle: 'Agree and Pay Now',
  onlyCard: false,
  processing: false,
  price: 19.0
}

export default CardInput
