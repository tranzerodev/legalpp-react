import React from 'react'
import moment from 'moment'

export default function Form ({ data, updatedAt }) {
  const info = data
  return (
    <div className='preview'>
      <div className='header'>
        <div className='head'>&nbsp;</div>
        <h2 className='title'>
          STATE OF CALIFORNIA<br />
          ARTICLES OF INCORPORATION
        </h2>
      </div>
      <div className='content'>
        <ol>
          <li>The name of the corporation is {info.company_name}.</li>

          <li>
            The address in the State of California of the corporation is:<br />
            <div className='info'>
              <span className='info-title'>Address :</span>
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
          </li>

          <li>
            The corporation is a professional corporation within the meaning of California Corporations Code section 13400 et seq. The purpose of the corporation is to engage in the profession of
            {' '}
            {info.company_profession}
            {' '}
            and any other lawful activities (other than the banking or trust company business) not prohibited to a corporation engaging in such profession by applicable laws and regulations of California.
          </li>

          <li>
            The name of the corporation’s agent for service of process is:<br />
            <div className='info'>
              <span className='info-title'>Name :</span>
              <span className='info-content'>
                {' '}{info.registered_agent_name}{' '}
              </span>
            </div>

          </li>

          <li>
            {' '}
            The corporation is authorized to issue only one class of stock. The total number of shares that the corporation is authorized to issue is
            {' '}
            {info.number_of_shares}
            .
          </li>

          <li>
            The corporation is authorized to indemnify, to the fullest extent permissible under California law (as it may be amended from time to time), any person who at any time acts in the capacity of, or serves as, a director or officer of the corporation.
          </li>

          <li>
            The liability of the directors of the corporation for monetary damages shall be eliminated to the fullest extent permissible under California law, as it may be amended from time to time.
          </li>
        </ol>
      </div>
      <div className='footer row'>
        <span className='info col-5'>
          <span className='info-title'>Dated :</span>
          <span className='info-content'>
            {moment(updatedAt).format('MMMM DD, YYYY')}
          </span>
        </span>
        <div className='col-7' style={{ textAlign: 'right' }}>
          <span className='info'>
            <span className='info-content'>________________</span><br /><br />
            <span className='info-content'>
              {' '}
              {`${info.incorporator_name_firstname} ${info.incorporator_name_lastname}`}
              , Incorporator
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
