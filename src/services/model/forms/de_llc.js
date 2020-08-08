/* eslint-disable */
export default {
  name: 'ca_llc',
  description: 'Creating The Delaware Limited Liability Company',
  start: 'input_2',
  kind: 'Form',
  step: 5,
  nodes: [
    {
      id: 'input_2',
      kind: 'Input',
      content: {
        question: 'What will be the name of the company?',
        fields: [
          { kind: 'text', store: 'company_name' }
        ],
        next: 'input_3',
      }
    },
    {
      id: 'input_3',
      kind: 'Input',
      content: {
        question: 'Who will form the company?',
        fields: [
          { kind: 'text', store: 'incorporator_name' },
        ],
        next: 'yesno_3',
      }
    },
    {
      id: 'yesno_3',
      kind: 'YesNo',
      content: {
        question: 'Will the company have an office in Delaware?',
        fields: [
          { label: 'Yes', next: 'single_8' },
          { label: 'No', next: 'input_10' },
        ],
      }
    },
    {
      id: 'input_10',
      kind: 'Input',
      content: {
        question: 'Who will serve as the registered agent of the company?',
        fields: [
          { kind: 'text', store: 'registered_agent_name' },
        ],
        next: 'input_11',
      }
    },
    {
      id: 'input_11',
      kind: 'Input',
      content: {
        question: 'What is ${registered_agent_name}\'s Delaware address?',
        fields: [
          { kind: 'text', store: 'registered_agent_address_street', placeholder: 'Street Address' },
          { kind: 'text', store: 'registered_agent_address_city', placeholder: 'City' },
          { kind: 'text', store: 'registered_agent_address_zipcode', placeholder: 'Zipcode' },
        ],
        next: 'final_2',
      }
    },
    {
      id: 'single_8',
      kind: 'Single',
      content: {
        question: 'Who will serve as the registered agent of the company?',
        fields: [
          { kind: 'choice', label: '${company_name}', value: '${company_name}' },
          { kind: 'text', label: 'Other' },
        ],
        store: 'registered_agent_name',
        next: 'input_9',
      }
    },
    {
      id: 'input_9',
      kind: 'Input',
      content: {
        question: 'What is the address of the registered office of the company in the State of Delaware?',
        fields: [
          { kind: 'text', store: 'company_address_street', placeholder: 'Street Address' },
          { kind: 'text', store: 'company_address_city', placeholder: 'City' },
          { kind: 'text', store: 'company_address_zipcode', placeholder: 'Zipcode' },
        ],
        next: 'final_1',
      }
    },
    {
      id: 'final_1',
      kind: 'Final',
      content: {
        kind: 'Form',
        form: 'de_form_llc_certificate_of_formation_1',
      }
    },
    {
      id: 'final_2',
      kind: 'Final',
      content: {
        kind: 'Form',
        form: 'de_form_llc_certificate_of_formation_2',
      }
    }
  ]
};
