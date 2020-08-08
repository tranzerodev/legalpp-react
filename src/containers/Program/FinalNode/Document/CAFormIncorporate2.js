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
            The  purpose  of  the  corporation  is  to  engage  in  any  lawful  act  or  activity  for which a corporation may be organized under the General Corporation Law of California other than the  banking  business, the trust company  business or the practice  of  a  profession  permitted  to  be  incorporated  by  the  California Corporations Code.
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

          {info.classes_of_shares !== 'Two'
            ? <li>
              {' '}
                The corporation is authorized to issue only one class of stock. The total number of shares that the corporation is authorized to issue is
                {' '}
              {info.number_of_shares}
                .
              </li>
            : <li>
              <div>
                  (a) The corporation is authorized to issue two classes of shares, which shall be referred to as “Common Stock” and “Preferred Stock”.&nbsp;&nbsp;
                  {info.number_of_common_shares}
                {' '}
                  shares of Common Stock may be issued, and
                  {' '}
                {info.number_of_preferred_shares}
                {' '}
                  shares of Preferred Stock may be issued.
                </div>
              <br />
              <div>
                  (b) The board of directors may divide the Preferred Stock into any number of series and shall fix the designation and number of shares of each series. The board may determine and modify the rights, preferences, privileges and restrictions granted to and imposed upon any wholly unissued series of Preferred Stock. The board of directors (within the limits and restrictions of any resolution adopted by it, originally fixing the number of shares of any series) may increase or decrease the number of shares of any such series after the issue of shares of that series, but not below the number of then outstanding shares of such series.
                </div>
            </li>}

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
            {moment(updatedAt).format('MMMM D, YYYY')}
          </span>
        </span>
        <div className='col-7' style={{ textAlign: 'right' }}>
          <span className='info'>
            <span className='info-content'>________________</span>
            <br />
            <br />
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
