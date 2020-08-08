import React from 'react'
import moment from 'moment'

export default function Form ({ data, updatedAt }) {
  return (
    <div className='preview'>
      <div className='header'>
        <div>
          RECORDING REQUESTED BY<br />
          AND WHEN RECORDED MAIL TO<br />
          AND MAIL TAX STATEMENTS TO:<br />
          {data.tax_addressee_type === 'tax_addressee_1' &&
            <p className='ml-3 mt-1'>
              {data.deed_return_name}<br />
              {data.deed_return_address_1} {data.deed_return_address_2},
              {data.deed_return_city}
              ,
              {' '}
              {data.deed_return_state}
              {' '}
              {data.deed_return_zipcode}
              {' '}
              <br />
            </p>}
          {data.tax_addressee_type === 'tax_addressee_2' &&
            <p>
              <br />
              AND MAIL TAX STATEMENTS TO:<br /><br />
              {data.tax_name}<br />
              {data.tax_address_1} {data.tax_address_2}<br />
              {data.tax_city}, {data.tax_state} {data.tax_zipcode} <br />
            </p>}

        </div>
        <h2 className='title'>GRANT DEED</h2>
        <div className='right'>APN {data.apn}<br /><br /></div>
      </div>
      <div className='content'>
        The undersigned declares that County Transfer tax is $_______ [and City Transfer Tax is $ _________] computed on the full value of the property conveyed [or computed on the full value of the property less liens remaining on the property at the time of sale].
        <br />
        <br />
        FOR A VALUABLE CONSIDERATION, receipt of which is hereby acknowledged,&nbsp;
        {data.grantor_type === 'individual' &&
          <span className='underline'>
            {data.individual_grantee_name}
            ,
            {' '}
            {data.individual_grantee_status.toLowerCase()}
          </span>}
        {data.grantor_type === 'trustee' &&
          <span className='underline'>{data.name_of_trustee_and_trust}</span>}
        {data.grantor_type === 'entity' &&
          <span className='underline'>
            {data.grantor_name}
            ,
            {' '}
            {/[aeiou]/.test(data.grantor_state.charAt(0)) ? ' an' : ' a'}
            {' '}
            {data.grantor_state}
            {' '}
            {data.grantor_entity_type}
          </span>}
        {data.grantor_former_name
          ? <span>
            {' '}
              formerly known as
              {' '}
            <span className='underline'> {data.grantor_former_name}</span>
          </span>
          : ''}
        &nbsp;hereby GRANTS to
        {' '}
        {data.grantee_type === 'individual' &&
          <span className='underline'>
            {data.individual_grantee_name}
            {' '}
            {data.individual_grantee_status.toLowerCase()}
            {' '}
          </span>}
        {data.grantee_type === 'trustee' &&
          <span className='underline'>{data.name_of_trustee_and_trust}</span>}
        {data.grantee_type === 'entity' &&
          <span className='underline'>
            {data.entity_grantee_name}
            ,
            {' '}
            {/[aeiou]/.test(data.grantee_state.charAt(0)) ? 'an' : 'a'}
            {' '}
            {data.grantee_state}
            {' '}
            {data.grantee_entity_type}
          </span>}
        , the land located in the [City of _____________,] County of ___________, State of California, described in Exhibit “A” attached hereto, together with the improvements located thereon (the “Property”), subject to: (a) all liens, encumbrances and other matters of record, (b) all matters which could be ascertained by a survey of the Property, and (c) a lien not yet delinquent for real property taxes against the Property.
        <br />
      </div>
      <div className='footer row'>
        <div className='col-5'>
          <div className='info'>
            <span className='info-title'>Dated :</span>
            <span className='info-content'>
              {moment(updatedAt).format('MMMM DD, YYYY')}
            </span>
          </div>
        </div>
        <div className='col-7' style={{ textAlign: 'right' }}>
          <span className='info'>
            <span className='info-content mt-2'>
              {data.grantor_type === 'entity' &&
                <span>
                  {data.grantor_name}
                  {/[aeiou]/.test(data.grantor_state.charAt(0))
                    ? ', an'
                    : ', a'}
                  {' '}
                  {data.grantor_state}
                  {' '}
                  {data.grantor_entity_type}
                  <br />
                  <br />
                  By ________________________________<br /><br />
                  Name: <br />
                  Title: <br />
                </span>}

              {data.grantor_type !== 'entity' &&
                <span>
                  ___________________________________<br /><br />
                  Name:
                  {' '}
                  {data.individual_grantor_name ||
                    data.name_of_grantor_trustee_and_trust}
                </span>}
            </span>
          </span>
        </div>
      </div>
      <div className='page-footer'>MAIL TAX STATEMENTS AS DIRECTED ABOVE.</div>
    </div>
  )
}
