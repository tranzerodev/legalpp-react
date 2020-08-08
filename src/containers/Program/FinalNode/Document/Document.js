import React from 'react'

import CAFormProfessionalIncorporate2 from './CAFormProfessionalIncorporate2'
import CAFormProfessionalIncorporate1 from './CAFormProfessionalIncorporate1'
import CAFormIncorporate2 from './CAFormIncorporate2'
import CAFormIncorporate1 from './CAFormIncorporate1'
import CAGrantDeed from './CAGrantDeed'
import CALLC from './CALLC'

import DEFormIncorporate2 from './DEFormIncorporate2'
import DEFormIncorporate1 from './DEFormIncorporate1'
import DEFormProfessionalIncorporate2 from './DEFormProfessionalIncorporate2'
import DEFormProfessionalIncorporate1 from './DEFormProfessionalIncorporate1'

import DELLC1 from './DELLC1'
import DELLC2 from './DELLC2'

import DESingleMemberLLC from './DESingleMemberLLC'
import CASingleMemberLLC from './CASingleMemberLLC'

import NDA from './NDA'
import WebsiteTermsOfUse from './WebsiteTermsOfUse'

const Document = ({ form, data }) => (
  <div>
    {form === 'ca_form_articles_of_professional_s_incorporation_1' &&
      <CAFormProfessionalIncorporate1 data={data} />}
    {form === 'ca_form_articles_of_professional_s_incorporation_2' &&
      <CAFormProfessionalIncorporate2 data={data} />}
    {form === 'ca_form_articles_of_s_incorporation_1' &&
      <CAFormIncorporate1 data={data} />}
    {form === 'ca_form_articles_of_s_incorporation_2' &&
      <CAFormIncorporate2 data={data} />}

    {form === 'ca_form_articles_of_professional_c_incorporation_1' &&
      <CAFormProfessionalIncorporate1 data={data} isCCorp />}
    {form === 'ca_form_articles_of_professional_c_incorporation_2' &&
      <CAFormProfessionalIncorporate2 data={data} isCCorp />}
    {form === 'ca_form_articles_of_c_incorporation_1' &&
      <CAFormIncorporate1 data={data} isCCorp />}
    {form === 'ca_form_articles_of_c_incorporation_2' &&
      <CAFormIncorporate2 data={data} isCCorp />}

    {form === 'ca_grant_deed' && <CAGrantDeed data={data} />}
    {form === 'ca_llc' && <CALLC data={data} />}

    {form === 'de_form_articles_of_professional_s_incorporation_1' &&
      <DEFormProfessionalIncorporate1 data={data} />}
    {form === 'de_form_articles_of_professional_s_incorporation_2' &&
      <DEFormProfessionalIncorporate2 data={data} />}
    {form === 'de_form_articles_of_s_incorporation_1' &&
      <DEFormIncorporate1 data={data} />}
    {form === 'de_form_articles_of_s_incorporation_2' &&
      <DEFormIncorporate2 data={data} />}

    {form === 'de_form_articles_of_professional_c_incorporation_1' &&
      <DEFormProfessionalIncorporate1 data={data} isCCorp />}
    {form === 'de_form_articles_of_professional_c_incorporation_2' &&
      <DEFormProfessionalIncorporate2 data={data} isCCorp />}
    {form === 'de_form_articles_of_c_incorporation_1' &&
      <DEFormIncorporate1 data={data} isCCorp />}
    {form === 'de_form_articles_of_c_incorporation_2' &&
      <DEFormIncorporate2 data={data} isCCorp />}

    {form === 'de_form_llc_certificate_of_formation_1' &&
      <DELLC1 data={data} />}
    {form === 'de_form_llc_certificate_of_formation_2' &&
      <DELLC2 data={data} />}

    {form === 'ca_single_member_llc' && <CASingleMemberLLC data={data} />}
    {form === 'de_single_member_llc' && <DESingleMemberLLC data={data} />}

    {form === 'nda' && <NDA data={data} />}
    {form === 'website_terms_of_use' && <WebsiteTermsOfUse data={data} />}
  </div>
)

export default Document
