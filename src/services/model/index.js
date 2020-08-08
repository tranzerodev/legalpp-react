import ca_professional_s_corporation from './forms/ca_professional_s_corporation'
import ca_general_s_corporation from './forms/ca_general_s_corporation'
import de_professional_s_corporation from './forms/de_professional_s_corporation'
import de_general_s_corporation from './forms/de_general_s_corporation'
import general_s_corporation from './forms/general_s_corporation'
import professional_s_corporation from './forms/professional_s_corporation'

import ca_professional_c_corporation from './forms/ca_professional_c_corporation'
import ca_general_c_corporation from './forms/ca_general_c_corporation'
import de_professional_c_corporation from './forms/de_professional_c_corporation'
import de_general_c_corporation from './forms/de_general_c_corporation'
import general_c_corporation from './forms/general_c_corporation'
import professional_c_corporation from './forms/professional_c_corporation'

import ca_grant_deed from './forms/ca_grant_deed'
import ca_llc from './forms/ca_llc'
import de_llc from './forms/de_llc'
import llc from './forms/llc'
import de_single_member_llc from './forms/de_single_member_llc'
import ca_single_member_llc from './forms/ca_single_member_llc'
import llc_operating from './forms/llc_operating'
import nda from './forms/nda'
import website_terms_of_use from './forms/website_terms_of_use'

import topic_transfertax from './topics/transfertax'
import topic_incorporate from './topics/incorporate'
import topic_payroll from './topics/payroll'
import topic_trademark from './topics/trademark'
import topic_securitydeposit from './topics/securitydeposit'
import topic_workerscomp from './topics/workerscomp'

export default {
  ca_professional_s_corporation,
  ca_general_s_corporation,
  de_professional_s_corporation,
  de_general_s_corporation,
  general_s_corporation,
  professional_s_corporation,

  ca_professional_c_corporation,
  ca_general_c_corporation,
  de_professional_c_corporation,
  de_general_c_corporation,
  general_c_corporation,
  professional_c_corporation,

  ca_grant_deed,
  ca_llc,
  de_llc,
  llc,
  de_single_member_llc,
  ca_single_member_llc,
  llc_operating,
  nda,
  website_terms_of_use,

  incorporate: topic_incorporate,
  payroll: topic_payroll,
  trademark: topic_trademark,
  transfertax: topic_transfertax,
  securitydeposit: topic_securitydeposit,
  workerscomp: topic_workerscomp,
}
