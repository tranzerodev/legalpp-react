/* eslint-disable */
export default {
  name: 'website_terms_of_use',
  description: 'Creating Website Terms of Use',
  start: 'single_1',
  kind: 'Form',
  step: 3,
  nodes: [
    {
      id: 'single_1',
      kind: 'Single',
      content: {
        question: 'Can visitors purchase products through your website?',
        fields: [
          { kind: 'choice', label: 'Yes', next: 'description_0' },
          { kind: 'choice', label: 'No', next: 'input_2', },
        ],
      },
    },
    {
      id: 'description_0',
      kind: 'Final',
      content: {
        kind: 'Description',
        title: 'This Form is under construction.',
        message: 'This Form is under construction.'
      }
    },
    {
      id: 'input_2',
      kind: 'Input',
      content: {
        question: "What is the name of your company?",
        fields: [
          { kind: 'text', store: 'company_name' },
        ],
        next: 'input_3',
      }
    },
    {
      id: 'input_3',
      kind: 'Input',
      content: {
        question: "In what state is the principal office of your company located?",
        fields: [
          { kind: 'text', store: 'company_location' },
        ],
        next: 'final',
      },
    },
    {
      id: 'final',
      kind: 'Final',
      content: {
        kind: 'Form',
        form: 'website_terms_of_use',
      }
    }
  ],
}
