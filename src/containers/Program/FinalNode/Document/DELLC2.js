import React from 'react'
import moment from 'moment'

export default function Form ({ data, updatedAt }) {
  return (
    <div className='preview'>
      <div className='header'>
        <div className='head'>&nbsp;</div>
        <h2 className='title'>CERTIFICATE OF FORMATION</h2>
      </div>
      <br />
      <br />
      <div className='content px-5'>
        <p>
          This Certificate of Formation dated
          {' '}
          {moment(updatedAt).format('MMMM D, YYYY')}
          {' '}
          has been duly executed and is being filed by
          {' '}
          {data.incorporator_name}
          , as an authorized person, to form a limited liability company under the Delaware Limited Liability Company Act (6 Del.C. Section 18-101, et. seq.).
        </p>

        <p>
          FIRST.        The name of the limited liability company formed hereby is
          {' '}
          {data.company_name}
          {' '}
          (the “Company”).
        </p>

        <p>
          SECOND.  The address of the registered office of the Company in the State of Delaware is c/o
          {' '}
          {data.registered_agent_name}
          ,
          {' '}
          {data.registered_agent_address_street}
          ,
          {' '}
          {data.registered_agent_address_city}
          , DE
          {' '}
          {data.registered_agent_address_zipcode}
          .
        </p>

        <div className='p'>
          THIRD.      The name and address of the registered agent for service of process on the Company in the State of Delaware are:
          <br />
          <div className='info'>
            <span className='info-title'>Name :</span>
            <span className='info-content'> {data.registered_agent_name} </span>
          </div>
          <div className='info my-0'>
            <span className='info-title'>Address :</span>
            <span className='info-content'>
              {' '}{data.registered_agent_address_street}<br />
              {data.registered_agent_address_city}
              , DE
              {' '}
              {data.registered_agent_address_zipcode}
            </span>
          </div>
        </div>
        <p>
          IN WITNESS WHEREOF, the undersigned authorized person has executed this Certificate of Formation on the date first set forth above.
        </p>
      </div>
      <div className='footer row'>
        <div className='col-10 text-right'>
          <div style={{ textAlign: 'left', display: 'inline-block' }}>
            <div>____________________</div>
            <div>Name: {data.incorporator_name}</div>
            <div>Authorized Person</div>
          </div>
        </div>
      </div>
    </div>
  )
}
