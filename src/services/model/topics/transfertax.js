export default {
  name: "transfertax",
  description: "California Documentary Transfer Tax",
  start: "input_1",
  kind: "Topic",
  nodes: [
    {
      id: "input_1",
      kind: "Input",
      content: {
        question: "Please select county and city.",
        fields: [
          { kind: "select", label: "Select County", datasource: "county", store: "county" },
          { kind: "select", label: "Select City", datasource: "city", store: "city" }
        ],
        next: "single_2"
      }
    },
    {
      id: "single_2",
      kind: "Single",
      content: {
        question: "Is this a deed transfer or entity transfer?",
        fields: [
          { kind: "choice", label: "Entity", next: "single_3" },
          { kind: "choice", label: "Deed", next: "multi_2" }
        ]
      }
    },
    {
      id: "multi_2",
      kind: "Multi",
      content: {
        question: "County Exemptions",
        fields: [
          { datasource: "county_exemption_list" },
        ],
        store: "county_exemption",
        next: "multi_3"
      }
    },
    {
      id: "multi_3",
      kind: "Multi",
      content: {
        question: "City Exemptions",
        fields: [
          { datasource: "city_exemption_list" },
        ],
        store: "city_exemption",
        next: "action_1"
      }
    },
    {
      id: "action_1",
      kind: "Action",
      content: {
        kind: "CHECK_COUNTY_EXEMPTION",
        store: "county_exemption",
        next: ["action_2", "yesno_1"]
      }
    },
    {
      id: "action_2",
      kind: "Action",
      content: {
        kind: "CHECK_CITY_EXEMPTION",
        store: "city_exemption",
        next: ["final_0", "yesno_1"]
      }
    },
    {
      id: "yesno_1",
      kind: "YesNo",
      content: {
        question: "Was the deed made as a result of or in lieu of foreclosure or trustee's sale?",
        fields: [
          { kind: "choice", label: "Yes", next: "yesno_2" },
          { kind: "choice", label: "No", next: "final_10" }
        ]
      }
    },
    {
      id: "yesno_2",
      kind: "YesNo",
      content: {
        question: "Did the consideration exceed the unpaid debt, including accrued interest and cost of foreclosure?",
        fields: [
          { kind: "choice", label: "Yes", next: "final_10" },
          { kind: "choice", label: "No", next: "final_0" }
        ]
      }
    },
    {
      id: "final_0",
      kind: "Final",
      content: {
        title: "Transfer Tax",
        message: "<p>Congratulation! This transaction is exempt and no transfer taxes are due.</p>"
      }
    },
    {
      id: "final_10",
      kind: "Final",
      content: {
        kind: "CalculateTax"
      }
    },
    {
      id: "single_3",
      kind: "Single",
      content: {
        question: "What kind of entity is the property owner at the time of the transfer?",
        fields: [
          { kind: "choice", label: "Partnership", next: "yesno_3" },
          { kind: "choice", label: "Corporation", next: "yesno_4" },
          { kind: "choice", label: "Disregarded Entity", next: "yesno_4" },
        ]
      }
    },
    {
      id: "yesno_3",
      kind: "YesNo",
      content: {
        question: "Was there a transfer of 50% or more of the capital and profits of the partnership within a 12-month period?",
        fields: [
          { kind: "choice", label: "Yes", next: "final_1" },
          { kind: "choice", label: "No", next: "final_2" }
        ]
      }
    },
    {
      id: "final_1",
      kind: "Final",
      content: {
        title: "Transfer tax",
        message: `<p>100% of the net value of the partnership property is subject to transfer tax, even if less than 100% of the partnership is transferred.</p>
              <p><small>(See California Revenue and Taxation Code, Section 11925(b))</small></p>`,
        next: "calculate_tax"
      }
    },
    {
      id: "final_2",
      kind: "Final",
      content: {
        title: "Transfer tax",
        message: `<p>Congratulations! This transaction is exempt and no transfer taxes are due.</p>
          <p><small>(See California Revenue and Taxation Code, Section 11925(a))</small></p>`
      }
    },
    {
      id: "yesno_4",
      kind: "YesNo",
      content: {
        question: "Does grantee own over 50% of the entity?",
        fields: [
          { kind: "choice", label: "Yes", next: "yesno_5" },
          { kind: "choice", label: "No", next: "yesno_6" }
        ]
      }
    },
    {
      id: "yesno_5",
      kind: "YesNo",
      content: {
        question: "Did grantee own over 50% of the entity before the transaction?",
        fields: [
          { kind: "choice", label: "Yes", next: "final_0" },
          { kind: "choice", label: "No", next: "final_4" }
        ]
      }
    },
    {
      id: "final_4",
      kind: "Final",
      content: {
        title: "Transfer tax",
        message: `<p>The transfer is subject to transfer tax.</p>
          <p><small>(See California Revenue and Taxation Code, section 64(c)(1))</small></p>`,
        next: "calculate_tax"
      }
    },
    {
      id: "yesno_6",
      kind: "YesNo",
      content: {
        question: "Was there a prior excluded proportional interest transfer?",
        fields: [
          { kind: "choice", label: "Yes", next: "yesno_7" },
          { kind: "choice", label: "No", next: "final_0" }
        ]
      }
    },
    {
      id: "yesno_7",
      kind: "YesNo",
      content: {
        question: "Was more than 50% cumulatively transferred since (and including) the prior proportional interest transfer?",
        fields: [
          { kind: "choice", label: "Yes", next: "final_5" },
          { kind: "choice", label: "No", next: "final_0" }
        ]
      }
    },
    {
      id: "final_5",
      kind: "Final",
      content: {
        title: "Transfer tax",
        message: `<p>The transfer is subject to transfer tax.</p>
          <p><small>(See California Revenue and Taxation Code, section 64(d); 926 North Ardmore Avenue, LLC v. County of Los Angeles, California Supreme Court)</small></p>`,
        actions: [
          {
            kind: "continue",
            title: "Calculate",
            next: "calculate_tax"
          }
        ]
      }
    },
    {
      id: "calculate_tax",
      kind: "Final",
      content: {
        kind: "CalculateTax"
      }
    },
  ]
};
