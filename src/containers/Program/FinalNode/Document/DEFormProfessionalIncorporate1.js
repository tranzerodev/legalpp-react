import React from 'react'
import moment from 'moment'
import commaNumber from 'comma-number'

export default function Form ({ data, isCCorp, updatedAt }) {
  const info = data
  return (
    <div className='preview'>
      <div className='header'>
        <div className='head'>&nbsp;</div>
        <h2 className='title'>
          STATE OF DELAWARE<br />
          CERTIFICATE OF INCORPORATION
        </h2>
      </div>
      <div className='content'>
        <br />
        The undersigned incorporator hereby certifies as follows:
        <ol>
          <li>The name of the corporation is {info.company_name}.</li>

          <li>
            The address of the Registered Office of the corporation in the State of Delaware is as follows:
            <br />
            <div className='info'>
              <span className='info-content'>
                {' '}{info.company_address_street} <br />
                {info.company_address_city}
                ,
                {' '}
                {info.company_address_state}
                {' '}
                {info.company_address_zipcode}
              </span>
            </div>
            <div className='info'>
              The name of its registered agent at such address is
              {' '}
              {info.registered_agent_name}
            </div>
          </li>

          <li>
            The corporation is a professional corporation within the meaning of The Professional Service Corporation Act, Delaware  Code Title 8 section 601 et seq. The purpose of the corporation is to engage in the profession of
            {' '}
            {info.company_profession}
            {' '}
            and any lawful act or activity for which a corporation engaging in such profession may be organized under the applicable laws and regulations of Delaware.
          </li>

          <li>
            {isCCorp
              ? 'T'
              : 'The corporation is authorized to issue only one class of shares of stock; and t'}
            he total number of shares that the corporation is authorized to issue is
            {' '}
            {commaNumber(info.number_of_shares)}
            {' '}
            with a par value of $
            {info.par_value_of_shares}
            {' '}
            per share.
          </li>

          <li>
            The name and mailing address of the corporation’s incorporator are:
            <br />
            <div className='info'>
              <span className='info-title'>Name :</span>
              <span className='info-content'>
                {' '}
                {info.incorporator_name_firstname}
                {' '}
                {info.incorporator_name_lastname}
                {' '}
              </span>
            </div>
            <div className='info'>
              <span className='info-title'>Address :</span>
              <span className='info-content'>
                {' '}{info.incorporator_address_street}<br />
                {info.incorporator_address_city}
                ,
                {' '}
                {info.incorporator_address_state}
                {' '}
                {info.incorporator_address_zipcode}
              </span>
            </div>
          </li>

          <li>
            The board of directors of the corporation shall have the power to adopt, amend or repeal
            the by-laws of the corporation, subject to the power of the stockholders of the corporation to alter
            or repeal any bylaw whether adopted by them or otherwise.
          </li>

          <li>
            No director shall be personally liable to the corporation or its stockholders for monetary
            damages for any breach of fiduciary duty by such director as a director, except for liability (i) for
            breach of the director's duty of loyalty to the corporation or its stockholders, (ii) for acts or
            omissions not in good faith or which involve intentional misconduct or a knowing violation of
            law, (iii) pursuant to Section 174 of the Delaware General Corporation Law or (iv) for any
            transaction from which the director derived an improper personal benefit. No amendment to or
            repeal of this paragraph shall apply to or have any effect on the liability or alleged liability of any
            director of the corporation for or with respect to any acts or omissions of such director occurring
            prior to such amendment.
          </li>
        </ol>
      </div>
      <div className='footer row'>
        <span className='info col-5'>
          <span className='info-title'>Dated :</span>
          <span className='info-content'>
            {moment(updatedAt).format('MMMM D, YYYY')}
          </span>
        </span>
        <div className='col-7' style={{ textAlign: 'right' }}>
          <span className='info'>
            <span className='info-content'>_______________________</span>
            <br />
            <span className='info-content'>
              {`${info.incorporator_name_firstname} ${info.incorporator_name_lastname}`}
              , Incorporator
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
