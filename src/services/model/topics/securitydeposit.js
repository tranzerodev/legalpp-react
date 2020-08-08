/* eslint-disable */
export default {
  name: "securitydeposit",
  description: "Security Deposit",
  start: "yesno_1",
  kind: "Topic",
  attach: {
    ['GOOD_FAITH_ESTIMATES']:
      `<h2>Good Faith Estimates</h2>
      <p>If services or materials are being supplied by another person or business and the landlord does not have the invoice or receipt within 21 days after your move, then the landlord is allowed to make a good faith estimate of charges and include the estimate in the itemized statement. The landlord must include the name, address and telephone number of the person or business that is supplying the services or materials.</p>
      <p>Within 14 calendar days after completing the repairs or receiving the invoice or receipt, the landlord must mail or deliver to you a correct itemized statement, the invoices and receipts described above, and any refund to which you are entitled. <small>[Civil Code Section 1950.5(g)(3)]</small></p>`,

    ['GOOD_FAITH_ESTIMATES_2']:
      `<h2>Good Faith Estimates</h2>
      <p>If the repair is being done by the landlord or an employee and cannot reasonably be completed within 21 days after your move, the landlord is allowed to make a good faith estimate of charges and include the estimate in the itemized statement.</p>
      <p>Within 14 calendar days after completing the repairs or receiving the invoice or receipt, the landlord must mail or deliver to you a correct itemized statement, the invoices and receipts described above, and any refund to which you are entitled. <small>[Civil Code Section 1950.5(g)(3)]</small></P>`,

    ['IMPROPER_DEDUCTIONS']:
      `<h2>Improper Deductions</h2>
      <p>If you believe your landlord has made an improper deduction from your security
        deposit, or if the landlord keeps all of the deposit without good reason, tell the landlord
        or the landlord's agent why you believe that the deductions from your security deposit
        are improper. Immediately ask the landlord or agent for a refund of the amount that
        you believe you're entitled to get back. You can make this request by phone or e-mail,
        but you should follow it up with a letter. The letter should state the reasons that you
        believe the deductions are improper, and the amount that you feel should be returned
        to you. Keep a copy of your letter. It's a good idea to send the letter to the landlord or
        agent by certified mail and to request a return receipt to prove that the landlord or
        agent received the letter. Or, you can deliver the letter personally and ask the landlord
        or agent to acknowledge receipt by signing and dating your copy of the letter.</p>`
  },
  nodes: [
    {
      id: "yesno_1",
      kind: "YesNo",
      content: {
        question: "Has it been more than 21 days since you have moved?",
        fields: [
          { label: "Yes", next: "yesno_2" },
          { label: "No", next: "final_1" }
        ]
      }
    },
    {
      id: "final_1",
      kind: "Final",
      content: {
        kind: "General",
        title: "You are not entitiled to a refund of your security deposit... yet.",
        message: "Under CA law, Landlord has 21 calendar days after you move to send you a full refund of your security deposit, or mail or personally deliver to you an itemized statement that lists the amounts of any deductions from your security deposit and the reasons for the deductions, together with a refund of any amounts not deducted."
      }
    },
    {
      id: "yesno_2",
      kind: "YesNo",
      content: {
        question: "Has the landlord mailed or personally delivered to you an itemized statement that lists the amounts of any deductions from your security deposit and the reasons for the deductions, together with a refund of any amounts not deducted?",
        fields: [
          { label: "Yes", next: "yesno_3" },
          { label: "No", next: "final_2" }
        ]
      }
    },
    {
      id: "final_2",
      kind: "Final",
      content: {
        title: "You are likely entitled to a full refund of your security deposit",
        message: `<p>According to a California Supreme Court decision, the landlord loses the right to keep any of the security deposit and must return the entire deposit to you. <small>[See Portman and Brown, California Tenants' Rights, page 235-236 (NOLO Press 2010)]</small></p>`,
        attach: ['GOOD_FAITH_ESTIMATES']
      }
    },
    {
      id: "yesno_3",
      kind: "YesNo",
      content: {
        question: "Is the cost of repairs and/or cleaning less than $126?",
        fields: [
          { label: "Yes", next: "final_3" },
          { label: "No", next: "single_1" }
        ]
      }
    },
    {
      id: "final_3",
      kind: "Final",
      content: {
        title: "You are likely entitled to a refund of your security deposit, less the cost repairs and/or cleaning.",
        message: `<p>The landlord is not required to send you copies of invoices or receipts, or a good faith estimate, if the repairs or cleaning cost less than $126.<p/>
                  <p>You may request copies of these documents from the landlord within 14 calendar days after you receive the itemized statement. It's best to make this request both orally and in writing. Keep a copy of your letter or e-mail. The landlord must send you copies of invoices, receipts and any good faith estimate within 14 calendar days after he or she receives your request. <small>[Civil Code Section 1950.5(g)(5)]</small><p/>`,
        attach: ['IMPROPER_DEDUCTIONS']
      }
    },
    {
      id: "single_1",
      kind: "YesNo",
      content: {
        question: "Did the landlord or the landlord's employees do the work, or another person or business?",
        fields: [
          { kind: "choice", label: "Other person or business", next: "yesno_4" },
          { kind: "choice", label: "Landlord or landlord's employees", next: "final_4" },
        ],
      }
    },
    {
      id: "yesno_4",
      kind: "YesNo",
      content: {
        question: "Did Landlord send copies of receipts for the charges that the landlord incurred to repair or clean the rental unit and that the landlord deducted from your security deposit?",
        fields: [
          { label: "Yes", next: "final_5" },
          { label: "No", next: "yesno_5" }
        ]
      }
    },
    {
      id: "final_4",
      kind: "Final",
      content: {
        title: "You are likely entitled to a refund of your security deposit, less the cost repairs and/or cleaning.",
        message: `<p>The itemized statement must describe the work performed, including the time spent and the hourly rate charged. The hourly rate must be reasonable.<p/>`,
        attach: ['GOOD_FAITH_ESTIMATES_2', 'IMPROPER_DEDUCTIONS']
      }
    },
    {
      id: "final_5",
      kind: "Final",
      content: {
        title: "You are likely entitled to a refund of your security deposit, less the cost repairs and/or cleaning.",
        message: '',
        attach: ['IMPROPER_DEDUCTIONS']
      }
    },
    {
      id: "yesno_5",
      kind: "YesNo",
      content: {
        question: "Did you waive your rights to receive them?",
        fields: [
          { label: "Yes", next: "final_5" },
          { label: "No", next: "final_2" }
        ]
      }
    },
  ]
}
