import React from 'react'
import Button from 'components/Button'
import reactHtmlParser from 'react-html-parser'

import './styles.css'

export default class Trademark extends React.Component {
  render () {
    const { prev, showFeedback, registerable, message } = this.props
    return (
      <div className='inputbox lg-final-trademark final-topic  www fadeIn'>
        <h2 className='inputbox__title mt-2'>
          {registerable
            ? 'Great! Your trademark may be registered so long as none of the previously described exclusions apply.'
            : 'Your trademark cannot be registered.'}
        </h2>
        <div className='final-body'>
          <p className='mb-4 mt-3 lg-description'>
            {registerable
              ? 'Would you like to file your trademark application now?'
              : reactHtmlParser(message)}
          </p>
          {registerable ? (
            <React.Fragment>
              <a
                className='button button--transparent'
                href='https://www.uspto.gov/trademarks-application-process/filing-online/initial-application-forms'
                rel='noopener noreferrer'
                target='_blank'
              >
                File my Trademark
              </a>
              <p className='lg-footnote mt-4'>
                You will be redirected off this site to https://www.uspto.gov/trademarks-application-process/filing-online/initial-application-forms
              </p>
            </React.Fragment>
          ) : null}
        </div>

        <div className='buttons mt-5 pt-4'>
          <Button className='mr-1' fullWidth onClick={prev}>
            Back
          </Button>
          <Button className='ml-1' fullWidth onClick={showFeedback}>
            Finish
          </Button>
        </div>
      </div>
    )
  }
}
