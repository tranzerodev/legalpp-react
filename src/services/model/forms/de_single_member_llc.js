/* eslint-disable */
export default {
  name: 'de_single_member_llc',
  description: 'Creating the Single Member Delaware LLC Agreement',
  start: 'input_1',
  kind: 'Form',
  step: 4,
  nodes: [
    {
      id: 'input_1',
      kind: 'Input',
      content: {
        question: 'What is the name of your company?',
        fields: [
          { kind: 'text', store: 'company_name' }
        ],
        next: 'input_2',
      }
    },
    {
      id: 'input_2',
      kind: 'Input',
      content: {
        question: 'Who will be the sole member of the company?',
        fields: [
          { kind: 'text', store: 'member_name' },
        ],
        next: 'input_3',
      }
    },
    {
      id: 'input_3',
      kind: 'Input',
      content: {
        question: 'When was the certificate of formation of the Company filed with the Delaware Secretary of State?',
        fields: [
          { kind: 'text', store: 'formation_date' },
        ],
        next: 'input_4',
      }
    },
    {
      id: 'input_4',
      kind: 'Input',
      content: {
        question: "What is the address of the company's principal place of business?",
        fields: [
          { kind: 'text', store: 'principal_office_address_street', placeholder: 'Street Address' },
          { kind: 'text', store: 'principal_office_address_city', placeholder: 'City' },
          { kind: 'text', store: 'principal_office_address_zipcode', placeholder: 'Zipcode' },
        ],
        next: 'final',
      }
    },
    {
      id: 'final',
      kind: 'Final',
      content: {
        kind: 'Form',
        form: 'de_single_member_llc',
      }
    },
  ]
};
