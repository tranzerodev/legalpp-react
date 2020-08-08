import React, { Component } from 'react'
import imgBack1 from './background/background1.jpg'
import imgBack2 from './background/background2.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './styles.css'

function Page1 ({ data }) {
  return (
    <div className='form-page'>
      <div style={{ position: 'absolute', left: 0, top: 0 }}>
        <img src={imgBack1} style={{ width: 595, height: 842 }} alt='back' />
      </div>
      <div
        style={{ position: 'absolute', left: 477.28, top: 74.15 }}
        className='cls_002'
      >
        <span className='cls_002'>Secretary of State</span>
      </div>
      <div
        style={{ position: 'absolute', left: 428.17, top: 85.24 }}
        className='cls_002'
      >
        <span className='cls_002'>Business Programs Division</span>
      </div>
      <div
        style={{ position: 'absolute', left: 275.22, top: 97.60 }}
        className='cls_004'
      >
        <span className='cls_004'>
          Business Entities, P.O. Box 944228, Sacramento, CA 94244-2280
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 287.70, top: 130.85 }}
        className='cls_005'
      >
        <span className='cls_005'>Mail Submission Cover Sheet</span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 160.02 }}
        className='cls_002'
      >
        <span className='cls_002'>Instructions:</span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 177.05 }}
        className='cls_004'
      >
        <span className='cls_004'>
             Complete and include this form with your submission.{' '}
        </span>
        <span className='cls_002'>
          This information only will be used to communicate with you
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 48.29, top: 188.25 }}
        className='cls_002'
      >
        <span className='cls_002'>in writing about the submission</span>
        <span className='cls_004'>.</span>
        <span className='cls_002' />
        <span className='cls_004'>
          This form will be treated as correspondence and will not be made part of the filed
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 48.27, top: 199.69 }}
        className='cls_004'
      >
        <span className='cls_004'>document.</span>
      </div>
      <div
        style={{ position: 'absolute', left: 34.74, top: 214.62 }}
        className='cls_004'
      >
        <span className='cls_004'>   Make all </span>
        <span className='cls_002'>checks or money orders </span>
        <span className='cls_004'>payable to the Secretary of State.</span>
      </div>
      <div
        style={{ position: 'absolute', left: 34.73, top: 229.79 }}
        className='cls_004'
      >
        <span className='cls_004'>
             Do not include a $15 counter fee when submitting documents by mail.
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 244.60 }}
        className='cls_006'
      >
        <span className='cls_006'> </span>
        <span className='cls_004'> Standard  processing  time  for</span>
        <span className='cls_002'> submissions </span>
        <span className='cls_004'> to  this  office  is  approximately</span>
      </div>
      <div
        style={{ position: 'absolute', left: 402.17, top: 244.60 }}
        className='cls_004'
      >
        <span className='cls_004'>5  business  days  from  receipt. All</span>
      </div>
      <div
        style={{ position: 'absolute', left: 48.30, top: 255.80 }}
        className='cls_002'
      >
        <span className='cls_002'>submissions </span>
        <span className='cls_004'>
          {' '}
          are   reviewed   in   the   date   order   of   receipt.   For   updated   processing   time   information,   visit
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 48.30, top: 267.01 }}
        className='cls_007'
      >
        <span className='cls_007'>www.</span>
        <span className='cls_008'>sos.ca.gov/business/be/processing-times</span>
        <span className='cls_009'>.</span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 292.78 }}
        className='cls_002'
      >
        <span className='cls_002'>Optional Copy and Certification Fees:</span>
      </div>
      <div
        style={{ position: 'absolute', left: 34.99, top: 310.05 }}
        className='cls_004'
      >
        <span className='cls_004'>
             If applicable, include optional copy and certification fees with your submission.
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 328.83 }}
        className='cls_010'
      >
        <span className='cls_010'></span>
      </div>
      <div
        style={{ position: 'absolute', left: 48.30, top: 324.98 }}
        className='cls_004'
      >
        <span className='cls_004'>
          For applicable copy and certification fee information, refer to the instructions of the specific form you are submitting.
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 369.32 }}
        className='cls_011'
      >
        <span className='cls_011'>Contact Person:</span>
        <span className='cls_012'> (Please type or print legibly)</span>
      </div>
      <div
        style={{ position: 'absolute', left: 87.81, top: 387.31 }}
        className='cls_013'
      >
        <span className='cls_013'>{data.organizer_first_name}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 362.67, top: 387.12 }}
        className='cls_013'
      >
        <span className='cls_013'>{data.organizer_last_name}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 396.61 }}
        className='cls_012'
      >
        <span className='cls_012'>First Name:</span>
      </div>
      <div
        style={{ position: 'absolute', left: 86.33, top: 396.62 }}
        className='cls_014'
      >
        <span className='cls_014'>
          __________________________________________________{' '}
        </span>
        <span className='cls_012'> Last Name:</span>
        <span className='cls_014'>
          {' '}_______________________________________________
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 105.94, top: 414.75 }}
        className='cls_013'
      >
        <span className='cls_013' />
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 423.10 }}
        className='cls_012'
      >
        <span className='cls_012'>Phone (optional):</span>
        <span className='cls_014'>
          {' '}______________________________________________
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 452.38 }}
        className='cls_011'
      >
        <span className='cls_011'>Entity Information:</span>
        <span className='cls_010' />
        <span className='cls_012'>(Please type or print legibly)</span>
      </div>
      <div
        style={{ position: 'absolute', left: 71.88, top: 470.51 }}
        className='cls_013'
      >
        <span className='cls_013'>{data.llc_name}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 479.57 }}
        className='cls_012'
      >
        <span className='cls_012'>Name:</span>
      </div>
      <div
        style={{ position: 'absolute', left: 69.07, top: 479.57 }}
        className='cls_014'
      >
        <span className='cls_014'>
          __________________________________________________________________________________________________________________
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 186.98, top: 489.80 }}
        className='cls_015'
      >
        <span className='cls_015' />
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 506.05 }}
        className='cls_012'
      >
        <span className='cls_012'>Entity Number </span>
        <span className='cls_014'>(if applicable)</span>
        <span className='cls_012'>:</span>
        <span className='cls_014'> _____________________________________</span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 532.65 }}
        className='cls_012'
      >
        <span className='cls_012'>Comments:</span>
      </div>
      <div
        style={{ position: 'absolute', left: 93.27, top: 523.54 }}
        className='cls_013'
      >
        <span className='cls_013' />
      </div>
      <div
        style={{ position: 'absolute', left: 90.65, top: 533.81 }}
        className='cls_014'
      >
        <span className='cls_014'>
          _____________________________________________________________________________________________________________
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 92.94, top: 549.04 }}
        className='cls_013'
      >
        <span className='cls_013' />
      </div>
      <div
        style={{ position: 'absolute', left: 90.65, top: 559.25 }}
        className='cls_014'
      >
        <span className='cls_014'>
          _____________________________________________________________________________________________________________
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 92.94, top: 574.16 }}
        className='cls_013'
      >
        <span className='cls_013' />
      </div>
      <div
        style={{ position: 'absolute', left: 90.65, top: 584.69 }}
        className='cls_014'
      >
        <span className='cls_014'>
          _____________________________________________________________________________________________________________
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 92.25, top: 599.30 }}
        className='cls_013'
      >
        <span className='cls_013' />
      </div>
      <div
        style={{ position: 'absolute', left: 90.65, top: 610.24 }}
        className='cls_014'
      >
        <span className='cls_014'>
          _____________________________________________________________________________________________________________
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 648.03 }}
        className='cls_011'
      >
        <span className='cls_011'>Return Address:</span>
        <span className='cls_016'>
          {' '}
          For written communication from the Secretary of State related to this document, or if
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 660.40 }}
        className='cls_016'
      >
        <span className='cls_016'>
          purchasing a copy of the filed document enter the name of a person or company and the mailing address.
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 688.28 }}
        className='cls_006'
      >
        <span className='cls_006'>Name:</span>
      </div>
      <div
        style={{ position: 'absolute', left: 107.80, top: 686.28 }}
        className='cls_013'
      >
        <span className='cls_013'>
          {data.organizer_first_name}
          {' '}
          {data.organizer_middle_name}
          {' '}
          {data.organizer_last_name}
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 710.92 }}
        className='cls_006'
      >
        <span className='cls_006'>Company:</span>
      </div>
      <div
        style={{ position: 'absolute', left: 107.48, top: 708.03 }}
        className='cls_013'
      >
        <span className='cls_013'>{data.llc_name}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 107.77, top: 730.97 }}
        className='cls_013'
      >
        <span className='cls_013'>
          {data.have_different_mailing_address === 'yes'
            ? data.mailing_address_street
            : data.address_street}
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 401.80, top: 727.25 }}
        className='cls_018'
      >
        <span className='cls_018'>Secretary of State Use Only</span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 732.97 }}
        className='cls_006'
      >
        <span className='cls_006'>Address:</span>
      </div>
      <div
        style={{ position: 'absolute', left: 411.48, top: 740.32 }}
        className='cls_018'
      >
        <span className='cls_018'>T/TR:</span>
      </div>
      <div
        style={{ position: 'absolute', left: 107.75, top: 753.60 }}
        className='cls_013'
      >
        <span className='cls_013'>
          {data.have_different_mailing_address === 'yes'
            ? `${data.mailing_address_city}, ${data.mailing_address_state} ${data.mailing_address_zipcode}`
            : `${data.address_city}, CA ${data.address_zipcode}`}
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 755.60 }}
        className='cls_006'
      >
        <span className='cls_006'>City/State/Zip:</span>
      </div>
      <div
        style={{ position: 'absolute', left: 379.05, top: 756.30 }}
        className='cls_018'
      >
        <span className='cls_018'>AMT REC’D:</span>
      </div>
      <div
        style={{ position: 'absolute', left: 446.83, top: 756.30 }}
        className='cls_018'
      >
        <span className='cls_018'>$</span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 782.32 }}
        className='cls_014'
      >
        <span className='cls_014'>
          Doc Submission Cover - OBE (Rev. 09/2016)
        </span>
      </div>
    </div>
  )
}

function Page2 ({ data }) {
  return (
    <div className='form-page'>
      <div style={{ position: 'absolute', left: 0, top: 0 }}>
        <img src={imgBack2} style={{ width: 595, height: 842 }} alt='back' />
      </div>
      <div
        style={{ position: 'absolute', left: 320.13, top: 59.22 }}
        className='cls_020'
      >
        <span className='cls_020'>LLC-1</span>
      </div>
      <div
        style={{ position: 'absolute', left: 91.70, top: 64.23 }}
        className='cls_020'
      >
        <span className='cls_020'>Secretary of State</span>
      </div>
      <div
        style={{ position: 'absolute', left: 91.47, top: 78.58 }}
        className='cls_022'
      >
        <span className='cls_022'>Articles of Organization</span>
      </div>
      <div
        style={{ position: 'absolute', left: 91.35, top: 94.22 }}
        className='cls_024'
      >
        <span className='cls_024'>Limited Liability Company (LLC)</span>
      </div>
      <div
        style={{ position: 'absolute', left: 27.65, top: 133.18 }}
        className='cls_025'
      >
        <span className='cls_025'>IMPORTANT — </span>
        <span className='cls_026'>Read Instructions</span>
        <span className='cls_025'> before completing this form.</span>
      </div>
      <div
        style={{ position: 'absolute', left: 27.65, top: 152.90 }}
        className='cls_025'
      >
        <span className='cls_025'>Filing Fee</span>
      </div>
      <div
        style={{ position: 'absolute', left: 79.57, top: 152.90 }}
        className='cls_025'
      >
        <span className='cls_025'>-</span>
      </div>
      <div
        style={{ position: 'absolute', left: 92.64, top: 152.90 }}
        className='cls_025'
      >
        <span className='cls_025'>$70.00</span>
      </div>
      <div
        style={{ position: 'absolute', left: 27.65, top: 172.61 }}
        className='cls_025'
      >
        <span className='cls_025'>Copy Fees</span>
      </div>
      <div
        style={{ position: 'absolute', left: 79.56, top: 172.61 }}
        className='cls_025'
      >
        <span className='cls_025'>- </span>
        <span className='cls_012'>
          {' '}First page $1.00,  each attachment page $0.50,{' '}
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 92.64, top: 183.00 }}
        className='cls_012'
      >
        <span className='cls_012'>Certification Fee - $5.00</span>
      </div>
      <div
        style={{ position: 'absolute', left: 27.65, top: 202.60 }}
        className='cls_027'
      >
        <span className='cls_027'>Note:</span>
        <span className='cls_012'>
          {' '}
          LLCs may have to pay minimum $800 tax to the California Franchise Tax Board
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 27.65, top: 211.82 }}
        className='cls_012'
      >
        <span className='cls_012'>
          each year.  For more information, go to{' '}
        </span>
        <a
          className='cls_028'
          href='https://www.ftb.ca.gov'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://www.ftb.ca.gov
        </a>
        <span className='cls_012'>.</span>
      </div>
      <div
        style={{ position: 'absolute', left: 407.52, top: 223.60 }}
        className='cls_025'
      >
        <span className='cls_025'>This Space For Office Use Only</span>
      </div>
      <div
        style={{ position: 'absolute', left: 27.65, top: 240.52 }}
        className='cls_002'
      >
        <span className='cls_002'>1.   Limited Liability Company Name</span>
        <span className='cls_029'> (</span>
        <span className='cls_030'>See Instructions</span>
        <span className='cls_014'>
          {' '}
          - Must contain an LLC ending such as LLC or L.L.C.  “LLC” will be added, if not included.)
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 32.31, top: 255.46 }}
        className='cls_024'
      >
        <span className='cls_024'>{data.llc_name}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 27.65, top: 304.68 }}
        className='cls_002'
      >
        <span className='cls_002'>2.  Business Addresses</span>
      </div>
      <div
        style={{ position: 'absolute', left: 27.65, top: 324.98 }}
        className='cls_031'
      >
        <span className='cls_031'>
          a. Initial Street Address of Designated Office in California - Do not enter a P.O. Box
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 311.62, top: 324.98 }}
        className='cls_031'
      >
        <span className='cls_031'>City (no abbreviations)</span>
      </div>
      <div
        style={{ position: 'absolute', left: 460.13, top: 324.98 }}
        className='cls_031'
      >
        <span className='cls_031'>State</span>
      </div>
      <div
        style={{ position: 'absolute', left: 491.17, top: 324.98 }}
        className='cls_031'
      >
        <span className='cls_031'>Zip Code</span>
      </div>
      <div
        style={{ position: 'absolute', left: 28.66, top: 335.00 }}
        className='cls_024'
      >
        <span className='cls_024'>{data.address_street}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 309.56, top: 335.00 }}
        className='cls_024'
      >
        <span className='cls_024'>{data.address_city}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 489.72, top: 335.00 }}
        className='cls_024'
      >
        <span className='cls_024'>{data.address_zipcode}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 460.37, top: 335.00 }}
        className='cls_011'
      >
        <span className='cls_011'>CA</span>
      </div>
      <div
        style={{ position: 'absolute', left: 27.65, top: 359.87 }}
        className='cls_031'
      >
        <span className='cls_031'>b. Initial Mailing Address of LLC, </span>
        <span className='cls_032'>if different than item 2a</span>
      </div>
      <div
        style={{ position: 'absolute', left: 311.62, top: 359.98 }}
        className='cls_031'
      >
        <span className='cls_031'>City (no abbreviations)</span>
      </div>
      <div
        style={{ position: 'absolute', left: 456.17, top: 359.98 }}
        className='cls_031'
      >
        <span className='cls_031'>State</span>
      </div>
      <div
        style={{ position: 'absolute', left: 491.17, top: 359.98 }}
        className='cls_031'
      >
        <span className='cls_031'>Zip Code</span>
      </div>
      <div
        style={{ position: 'absolute', left: 28.61, top: 369.72 }}
        className='cls_024'
      >
        <span className='cls_024'>{data.mailing_address_street}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 307.86, top: 369.75 }}
        className='cls_024'
      >
        <span className='cls_024'>{data.mailing_address_city}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 460.75, top: 369.75 }}
        className='cls_024'
      >
        <span className='cls_024'>{data.mailing_address_state}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 489.95, top: 369.75 }}
        className='cls_024'
      >
        <span className='cls_024'>{data.mailing_address_zipcode}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 28.00, top: 400.70 }}
        className='cls_002'
      >
        <span className='cls_002'>3.  Service of Process </span>
        <span className='cls_014'>(Must provide either Individual </span>
        <span className='cls_029'>OR</span>
        <span className='cls_014'> Corporation.)</span>
      </div>
      <div
        style={{ position: 'absolute', left: 43.40, top: 422.87 }}
        className='cls_029'
      >
        <span className='cls_029'>INDIVIDUAL</span>
        <span className='cls_014'>
          {' '}
          - Complete Items 3a and 3b only.  Must include agent’s full name and California street address.
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 28.00, top: 440.25 }}
        className='cls_035'
      >
        <span className='cls_035'>
          a. California Agent's First Name (if agent is{' '}
        </span>
        <span className='cls_036'>not</span>
        <span className='cls_035'> a corporation)</span>
      </div>
      <div
        style={{ position: 'absolute', left: 302.75, top: 440.37 }}
        className='cls_035'
      >
        <span className='cls_035'>Middle Name</span>
      </div>
      <div
        style={{ position: 'absolute', left: 397.72, top: 440.37 }}
        className='cls_035'
      >
        <span className='cls_035'>Last Name</span>
      </div>
      <div
        style={{ position: 'absolute', left: 522.44, top: 440.37 }}
        className='cls_035'
      >
        <span className='cls_035'>Suffix</span>
      </div>
      <div
        style={{ position: 'absolute', left: 28.43, top: 451.34 }}
        className='cls_024'
      >
        <span className='cls_024'>{data.agent_first_name}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 300.80, top: 451.31 }}
        className='cls_024'
      >
        <span className='cls_024'>{data.agent_middle_name}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 395.43, top: 451.31 }}
        className='cls_024'
      >
        <span className='cls_024'>{data.agent_last_name}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 529.72, top: 450.67 }}
        className='cls_024'
      >
        <span className='cls_024'>{data.agent_suffix}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 28.00, top: 475.25 }}
        className='cls_035'
      >
        <span className='cls_035'>b. Street Address (if agent is </span>
        <span className='cls_036'>not</span>
        <span className='cls_035'> a corporation) - </span>
        <span className='cls_036'>Do not enter a P.O. Box</span>
      </div>
      <div
        style={{ position: 'absolute', left: 302.75, top: 475.37 }}
        className='cls_035'
      >
        <span className='cls_035'>City (no abbreviations)</span>
      </div>
      <div
        style={{ position: 'absolute', left: 460.14, top: 475.37 }}
        className='cls_035'
      >
        <span className='cls_035'>State</span>
      </div>
      <div
        style={{ position: 'absolute', left: 492.92, top: 475.37 }}
        className='cls_035'
      >
        <span className='cls_035'>Zip Code</span>
      </div>
      <div
        style={{ position: 'absolute', left: 29.03, top: 485.19 }}
        className='cls_024'
      >
        <span className='cls_024'>
          {data.agent_address_street}
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 301.20, top: 485.27 }}
        className='cls_024'
      >
        <span className='cls_024'>
          {data.agent_address_city}
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 490.96, top: 485.27 }}
        className='cls_024'
      >
        <span className='cls_024'>
          {data.agent_address_zipcode}
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 460.95, top: 495.20 }}
        className='cls_011'
      >
        <span className='cls_011'>CA</span>
      </div>
      <div
        style={{ position: 'absolute', left: 43.52, top: 514.10 }}
        className='cls_029'
      >
        <span className='cls_029'>CORPORATION</span>
        <span className='cls_014'>
          {' '}
          - Complete Item 3c.  Only include the name of the registered agent Corporation.
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 28.00, top: 531.37 }}
        className='cls_035'
      >
        <span className='cls_035'>
          c. California Registered Corporate Agent’s Name (if agent is a corporation) - Do not complete Item 3a or 3b
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 29.39, top: 545.06 }}
        className='cls_024'
      >
        <span className='cls_024'>{data.registered_corporate_agent_name}</span>
      </div>
      <div
        style={{ position: 'absolute', left: 27.65, top: 576.40 }}
        className='cls_002'
      >
        <span className='cls_002'>4.  Management </span>
        <span className='cls_004'>(Select </span>
        <span className='cls_002'>only</span>
        <span className='cls_004'> one box)</span>
      </div>
      <div
        style={{ position: 'absolute', left: 27.65, top: 600.43 }}
        className='cls_004'
      >
        <span className='cls_004'>The LLC will be managed by:</span>
      </div>

      <div
        style={{ position: 'absolute', left: 93.52, top: 612.23 }}
        className='cls_037'
      >
        <input type='checkbox' disabled checked={data.manage_by === 'one'} />
      </div>
      <div
        style={{ position: 'absolute', left: 113.52, top: 617.23 }}
        className='cls_037'
      >
        <span className='cls_037'>One Manager</span>
      </div>
      <div
        style={{ position: 'absolute', left: 211.59, top: 612.23 }}
        className='cls_037'
      >
        <input type='checkbox' disabled checked={data.manage_by === 'more'} />
      </div>
      <div
        style={{ position: 'absolute', left: 231.59, top: 617.23 }}
        className='cls_037'
      >
        <span className='cls_037'>More than One Manager</span>
      </div>
      <div
        style={{ position: 'absolute', left: 377.84, top: 612.23 }}
        className='cls_037'
      >
        <input type='checkbox' disabled checked={data.manage_by === 'all'} />
      </div>
      <div
        style={{ position: 'absolute', left: 397.84, top: 617.23 }}
        className='cls_037'
      >
        <span className='cls_037'>All LLC Member(s)</span>
      </div>

      <div
        style={{ position: 'absolute', left: 27.65, top: 642.90 }}
        className='cls_002'
      >
        <span className='cls_002'>5.  Purpose Statement </span>
        <span className='cls_004'>(Do not alter Purpose Statement)</span>
      </div>
      <div
        style={{ position: 'absolute', left: 27.65, top: 666.58 }}
        className='cls_004'
      >
        <span className='cls_004'>
          The purpose of the limited liability company is to engage in any lawful act or activity for which a limited liability company
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 27.65, top: 677.20 }}
        className='cls_004'
      >
        <span className='cls_004'>
          may be organized under the California Revised Uniform Limited Liability Company Act.
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 27.65, top: 706.25 }}
        className='cls_002'
      >
        <span className='cls_002'>6.</span>
        <span className='cls_004'>
          {' '}
          The Information contained herein, including in any attachments, is true and correct.
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 322.52, top: 733.38 }}
        className='cls_024'
      >
        <span className='cls_024'>
          {data.organizer_first_name}
          {' '}
          {data.organizer_middle_name}
          {' '}
          {data.organizer_last_name}
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 30.21, top: 743.82 }}
        className='cls_014'
      >
        <span className='cls_014'>
          _____________________________________________________________
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 319.43, top: 743.82 }}
        className='cls_014'
      >
        <span className='cls_014'>
          __________________________________________________________
        </span>
      </div>
      <div
        style={{ position: 'absolute', left: 34.65, top: 753.85 }}
        className='cls_012'
      >
        <span className='cls_012'>Organizer sign here</span>
      </div>
      <div
        style={{ position: 'absolute', left: 327.83, top: 753.85 }}
        className='cls_012'
      >
        <span className='cls_012'>Print your name here</span>
      </div>
      <div
        style={{ position: 'absolute', left: 35.00, top: 774.62 }}
        className='cls_031'
      >
        <span className='cls_031'>LLC-1 (REV 04/2017)</span>
      </div>
      <div
        style={{ position: 'absolute', left: 437.97, top: 774.62 }}
        className='cls_038'
      >
        <span className='cls_038'>2017 California Secretary of State</span>
      </div>
      <div
        style={{ position: 'absolute', left: 446.72, top: 783.48 }}
        className='cls_039'
      >
        <span className='cls_039' />
        <a
          href='http://www.sos.ca.gov/business/be/'
          target='_blank'
          rel='noopener noreferrer'
        >
          www.sos.ca.gov/business/be
        </a>
        {' '}
      </div>
    </div>
  )
}

export default class Form extends Component {
  render () {
    const { data } = this.props

    const sliderSetting = {
      dots: true,
      infinite: false,
      autoplay: false
    }

    return (
      <div className='callc'>
        <Slider {...sliderSetting}>
          <Page1 data={data} />
          <Page2 data={data} />
        </Slider>
      </div>
    )
  }
}
