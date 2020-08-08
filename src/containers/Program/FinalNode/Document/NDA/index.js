import React from 'react'
import moment from 'moment'
import './styles.css'

export default function Form ({ data, updatedAt }) {
  const disclosing_party = data.disclosing_party_type === 'Individual'
    ? `<p class=MsoNormal><span style='font-family:"Times New Roman",serif'>______________________________</span></p>
    
    <p class=MsoNormal style='text-align:justify;punctuation-wrap:simple;
    text-autospace:none;vertical-align:baseline'><span style='font-family:"Times New Roman",serif'>${data.disclosing_party}</span></p>`
    : `<p class=MsoNormal style='text-align:justify;punctuation-wrap:simple;
    text-autospace:none;vertical-align:baseline'><span style='font-family:"Times New Roman",serif'>${data.disclosing_party}</span></p>
    
    <p class=MsoNormal style='text-align:justify;punctuation-wrap:simple;
    text-autospace:none;vertical-align:baseline'><span style='font-family:"Times New Roman",serif'>&nbsp;</span></p>
    
    <p class=MsoNormal style='text-align:justify;punctuation-wrap:simple;
    text-autospace:none;vertical-align:baseline'><span style='font-family:"Times New Roman",serif'>By:___________________________</span></p>
    
    <p class=MsoNormal style='text-align:justify;punctuation-wrap:simple;
    text-autospace:none;vertical-align:baseline'><span style='font-family:"Times New Roman",serif'>Name:__________________
    </span></p>
    
    <p class=MsoNormal style='text-align:justify;punctuation-wrap:simple;
    text-autospace:none;vertical-align:baseline'><span style='font-family:"Times New Roman",serif'>Title:
    __________________</span></p>`

  const recipient = data.recipient_type === 'Individual'
  ? `<p class=MsoNormal><span style='font-family:"Times New Roman",serif'>______________________________</span></p>
  
  <p class=MsoNormal style='text-align:justify;punctuation-wrap:simple;
  text-autospace:none;vertical-align:baseline'><span style='font-family:"Times New Roman",serif'>${data.recipient}</span></p>`
  : `<p class=MsoNormal style='text-align:justify;punctuation-wrap:simple;
  text-autospace:none;vertical-align:baseline'><span style='font-family:"Times New Roman",serif'>${data.recipient}</span></p>
  
  <p class=MsoNormal style='text-align:justify;punctuation-wrap:simple;
  text-autospace:none;vertical-align:baseline'><span style='font-family:"Times New Roman",serif'>&nbsp;</span></p>
  
  <p class=MsoNormal style='text-align:justify;punctuation-wrap:simple;
  text-autospace:none;vertical-align:baseline'><span style='font-family:"Times New Roman",serif'>By:___________________________</span></p>
  
  <p class=MsoNormal style='text-align:justify;punctuation-wrap:simple;
  text-autospace:none;vertical-align:baseline'><span style='font-family:"Times New Roman",serif'>Name:__________________
  </span></p>
  
  <p class=MsoNormal style='text-align:justify;punctuation-wrap:simple;
  text-autospace:none;vertical-align:baseline'><span style='font-family:"Times New Roman",serif'>Title:
  __________________</span></p>`

  const html = `<div class='preview lg-nda WordSection1'>

  <p class=NormalSpacedBottom align=center style='text-align:center'><b><u><span
  style='font-family:"Times New Roman",serif'>NON-DISCLOSURE AGREEMENT</span></u></b></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>This
  Non-Disclosure Agreement (the “<u>Agreement</u>”) is entered into as of ${moment(updatedAt).format('MMMM DD, YYYY')}
  (the &quot;<u>Effective Date</u>&quot;) by and between the undersigned
  disclosing party (the “<u>Disclosing Party</u>”), and the undersigned recipient
  (“<u>Recipient</u>”), with reference to the following facts.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            A.        Recipient
  has requested information from the Disclosing Party in connection with a
  possible negotiated transaction between Recipient and Disclosing Party (the “<u>Proposed
  Transaction</u>”).</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            B.        The
  Disclosing Party is willing to disclose to Recipient confidential information
  concerning the Disclosing Party and its activities on the condition that
  Recipient enter into this Agreement with the Disclosing Party.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>NOW
  THEREFORE, in consideration of the mutual promises set forth in this Agreement,
  the Disclosing Party and Recipient agree as follows.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            1.         <u>Definitions.</u></span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>                        (a)        The
  term “<u>Confidential Information</u>” shall mean all information or material
  that has commercial value or other utility in the business or prospective
  business of the Disclosing Party or its subsidiaries or affiliates, including
  without limitation, the information generally described on <u>Exhibit A</u>
  hereto. Confidential Information also includes all information of which
  unauthorized disclosure could be detrimental to the interests of the Disclosing
  Party or its subsidiaries or affiliates whether or not such information is
  identified as Confidential Information by the Disclosing Party. By example and
  without limitation, Confidential Information includes all of the following information,
  whether or not reduced to writing:</span></p>
  
  <p class=ExtractFlush style='text-align:justify'><span style='font-family:"Times New Roman",serif'>customer
  lists, customer and supplier identities and characteristics, agreements,
  marketing knowledge and information, sales figures, pricing information,
  marketing plans and business plans, strategies, forecasts, financial
  information, budgets, software, research papers, projections, procedures,
  routines, quality control and manufacturing procedures, processes, formulas,
  trade secrets, innovations, inventions, discoveries, improvements, research or
  development and test results, specifications, data, know-how, formats, plans,
  sketches, specifications, drawings, models, and any other information or
  procedures that are treated as or designated secret or confidential by the Disclosing
  Party or its customers or potential customers.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>For
  purposes of this Agreement, the term “<u>Representative</u>” means Recipient’s
  directors and officers (if any), managers, employees, agents, and financial,
  legal, and other advisors.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            2.         <u>Exclusions.</u>
  Confidential Information does not include information that Recipient can
  demonstrate: (a) was in Recipient’s possession before it was furnished to
  Recipient under the terms of this Agreement, provided the source of that
  information was not known by Recipient to have breached an obligation of
  confidentiality to the Disclosing Party; (b) is now, or later becomes,
  generally known to the public through no act or omission of Recipient; (c) is
  rightfully obtained by Recipient from a third party, without breach of any
  obligation to the Disclosing Party; or (d) is independently developed by
  Recipient without use of the Confidential Information.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            3.         <u>Confidentiality.</u>
  Recipient and its Representatives shall not disclose any of the Confidential
  Information in any manner whatsoever, except as provided in paragraphs 4 and 5
  of this Agreement and shall hold and maintain the Confidential Information in
  strictest confidence. Recipient shall indemnify the Disclosing Party against
  all losses, damages, claims, expenses, and attorneys’ fees incurred or suffered
  by the Disclosing Party as a result of a breach of this Agreement by Recipient
  or its Representatives.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            4.         <u>Permitted
  Disclosures.</u> Recipient may disclose the Confidential Information to
  Recipient’s Representatives with a bona fide need to know such Confidential
  Information, but only to the extent necessary to evaluate or carry out the Proposed
  Transaction and only if such Representatives are advised of the confidential
  nature of such Confidential Information and the terms of this Agreement and are
  bound by a written agreement or by a legally enforceable code of professional
  responsibility to protect the confidentiality of such Confidential Information. 
  Recipient may also disclose the Confidential Information to any person if: (a)
  the Disclosing Party gives prior written permission to Recipient to disclose
  its Confidential Information to that person; (b) before any disclosure of
  Confidential Information is made to the person, the person signs a non-disclosure
  agreement with respect to the Confidential Information, which provides at least
  the same level of protection to the Disclosing Party as provided by this
  Agreement; (c) the Recipient delivers a  copy of the signed agreement
  referenced in paragraph 4(b) above to the Disclosing Party within three
  business days after it is signed; and (d)  the Confidential Information is in
  written form and is stamped “Confidential Information of ${data.disclosing_party}”. </span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            5.         <u>Required
  Disclosures.</u> Recipient may disclose the Disclosing Party’s Confidential
  Information if and to the extent that such disclosure is required by court
  order or applicable law, provided that Recipient provides the Disclosing Party
  a reasonable opportunity to review the disclosure before it is made and to seek
  a protective order or other appropriate relief.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            6.         <u>Use.</u>
  Recipient and its Representatives shall use the Confidential Information solely
  for the purpose of evaluating the Proposed Transaction and shall not in any way
  use the Confidential Information to the detriment of the Disclosing Party.
  Nothing in this Agreement shall be construed as granting any rights to
  Recipient, by license or otherwise, to any of the Confidential Information.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            7.         <u>Acquisition
  of Information.</u> Recipient shall not initiate or maintain contact, except
  for those contacts made in the ordinary course of business, with any employee
  or agent of the Disclosing Party regarding its business, operations, prospects,
  or finances, except with the prior written approval of the Disclosing Party.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            8.         <u>Confidentiality
  of Negotiations.</u> Recipient and its Representatives shall not make any
  statement, public announcement, or other release to any trade publication or
  the press, or inform any third party of the discussions or negotiations in
  connection with the Proposed Transaction or the exchange of Confidential
  Information related to the Proposed Transaction.  Recipient may make such a
  disclosure if it has received the written opinion of outside counsel that such
  disclosure must be made in order to avoid a violation of law and a copy of such
  opinion has been provided to the Disclosing Party prior to such release.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            9.         <u>Protection.</u>
  Recipient shall be responsible for any breach of this Agreement by any of its
  Representatives and shall, at its sole expense, take all necessary measures
  (including but not limited to court proceedings) to restrain its
  Representatives from prohibited disclosure or use of the Confidential
  Information.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            10.       <u>Return
  of Documents.</u> If Recipient does not proceed with the Proposed Transaction,
  Recipient shall promptly notify the Disclosing Party of that decision and
  shall, at that time, return to the Disclosing Party all records, notes, and
  other written, printed or other tangible materials in its possession pertaining
  to the Confidential Information. The returning of materials shall not relieve
  Recipient from compliance with other terms and conditions of this Agreement.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            11.       <u>No
  Additional Agreements.</u> Neither the holding of discussions nor the exchange
  of material or information shall be construed as an obligation of the Disclosing
  Party to enter into any other agreement with Recipient or prohibit the Disclosing
  Party from providing the same or similar information to other parties and
  entering into agreements with other parties. The Disclosing Party reserves the
  right, in its sole discretion, to reject all proposals made by Recipient or its
  Representatives with regard to the Proposed Transaction and to terminate
  discussions and negotiations with Recipient at any time. </span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            12.       <u>Irreparable
  Harm.</u> Recipient acknowledges that any disclosure or misappropriation of any
  of the Confidential Information in violation of this Agreement may cause the Disclosing
  Party irreparable harm, the amount of which may be difficult to ascertain, and
  therefore agrees that the Disclosing Party shall have the right to apply to a
  court of competent jurisdiction for specific performance and/or an order
  enjoining any such further disclosure or breach and for such other relief as the
  Disclosing Party shall deem appropriate. Such right of the Disclosing Party shall
  be in addition to the remedies otherwise available to the Disclosing Party at
  law or in equity. Recipient expressly waives the defense that a remedy in
  damages will be adequate and any requirement in an action for specific
  performance or injunction for the posting of a bond by the Disclosing Party.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            13.       <u>Survival.</u>
  This Agreement shall continue in full force and effect at all times.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            14.       <u>Successors
  and Assigns.</u> This Agreement and each party’s obligations hereunder shall be
  binding on the representatives, successors, and assigns of such party and shall
  inure to the benefit of the successors and assigns of such party; provided,
  however, that the rights and obligations of Recipient hereunder are not
  assignable.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            15.       <u>Governing
  Law.</u> This Agreement shall be governed by and construed in accordance with
  the laws of ${data.choice_of_low_state}, other than its conflict of laws provisions.
  The parties hereby irrevocably consent and submit to the non-exclusive
  jurisdiction of the state and federal courts located in ${data.choice_of_low_state}
  in any action arising out of or relating to this Agreement.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            16.       <u>Attorneys'
  Fees.</u> If any action at law or in equity is brought to enforce or interpret
  the provisions of this Agreement, the prevailing party in such action shall be
  entitled to reimbursement for reasonable attorneys’ fees and costs from the
  other party.</span></p>
  
  <p class=NormalSpaced style='text-align:justify;text-indent:13.5pt'><span
  style='font-family:"Times New Roman",serif'>       17.       <u>Severability.</u> 
  If any provision of this Agreement is invalid or unenforceable under any
  applicable statute or rule of law, then such provision shall be deemed
  inoperative to the extent that it may conflict therewith and shall be deemed
  modified to conform with such statute or rule of law. Any provision hereof
  which may prove invalid or unenforceable under any law shall not affect the
  validity or enforceability of any other provision hereof.</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            18.       <u>Entire
  Agreement.</u> This Agreement expresses the full and complete understanding of
  the parties with respect to the subject matter hereof and supersedes all prior
  or contemporaneous proposals, agreements, representations and understandings,
  whether written or oral, with respect to the subject matter.  If any
  Confidential Information has been provided to Recipient prior to the Effective
  Date, it shall be covered by this Agreement. This Agreement shall not limit any
  rights that the Disclosing Party may have under trade secret, copyright, patent
  or other laws that may be available to the Disclosing Party. This Agreement may
  not be amended or modified except in writing signed by each of the parties to
  the Agreement. This Agreement shall be construed as to its fair meaning and not
  strictly for or against either party. </span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>            19.       <u>Counterparts.</u>
  This Agreement may be signed in counterparts, which together shall constitute
  one agreement. A signed counterpart of this Agreement transmitted by electronic
  mail in PDF or other digital format shall bind the party so signing with the
  same effect as though the signature were an original signature.  </span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>[Signature
  page follows.]</span></p>
  
  <span style='font-size:12.0pt;font-family:"Times New Roman",serif'><br
  clear=all style='page-break-before:always'>
  </span>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>IN
  WITNESS WHEREOF, a duly authorized representative of each party has executed
  this Non-Disclosure Agreement as of the Effective Date.</span></p>
  
  <p class=MsoNormal style='text-align:justify;punctuation-wrap:simple;
  text-autospace:none;vertical-align:baseline'><span style='font-family:"Times New Roman",serif'>Disclosing
  Party:</span></p>
  
  ${disclosing_party}
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>&nbsp;</span></p>
  
  <p class=MsoNormal style='text-align:justify;punctuation-wrap:simple;
  text-autospace:none;vertical-align:baseline'><span style='font-family:"Times New Roman",serif'>Recipient:</span></p>
  
  ${recipient}
  
  <p class=MsoNormal style='text-align:justify;punctuation-wrap:simple;
  text-autospace:none;vertical-align:baseline'><span style='font-family:"Times New Roman",serif'>&nbsp;</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>                                                   
  </span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>                                                   
  </span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>&nbsp;</span></p>
  
  <p class=MsoNormal style='text-align:justify'><span style='font-family:"Times New Roman",serif'>&nbsp;</span></p>
  
  <p class=MsoNormal align=center style='text-align:center;text-indent:12.25pt;
  page-break-before:always'><span style='font-family:"Times New Roman",serif'>EXHIBIT
  A</span></p>
  
  <p class=MsoNormal align=center style='text-align:center;text-indent:12.25pt'><span
  style='font-family:"Times New Roman",serif'>CONFIDENTIAL INFORMATION</span></p>
  
  <p class=MsoNormal style='text-align:justify;text-indent:12.25pt'><span
  style='font-family:"Times New Roman",serif'>&nbsp;</span></p>
  
  <p class=MsoNormal style='text-align:justify;text-indent:12.25pt'><span
  style='font-family:"Times New Roman",serif'>${data.description}</span></p>
  
  <p class=MsoNormal style='text-align:justify;text-indent:12.25pt'><span
  style='font-family:"Times New Roman",serif'>&nbsp;</span></p>
  
  </div>`

  return (
    <div dangerouslySetInnerHTML={{__html: html}}/>
  )
}
