/* eslint-disable */
export default {
  name: 'nda',
  description: 'Non-Disclosure Agreement',
  start: 'description_0',
  kind: 'Form',
  step: 6,
  nodes: [
    {
      id: 'description_0',
      kind: 'Description',
      content: {
        fields: [{ value: 'This form is designed for use by a company or individual (referred to as the “Disclosing Party”) who is asked to provide confidential information to an individual or company (referred to as the “Recipient”).' }],
        next: 'input_1'
      }
    },
    {
      id: 'input_1',
      kind: 'Input',
      content: {
        question: 'What is the name of the Disclosing Party?',
        fields: [
          { kind: 'text', store: 'disclosing_party' }
        ],
        next: 'single_2',
      }
    },
    {
      id: 'single_2',
      kind: 'Single',
      content: {
        question: 'Is Disclosing Party an individual or an entity?',
        fields: [
          { kind: 'choice', label: 'Individual' },
          { kind: 'choice', label: 'Entity' },
        ],
        store: 'disclosing_party_type',
        next: 'select_3',
      },
    },
    {
      id: 'select_3',
      kind: 'Input',
      content: {
        question: 'In what state is Disclosing Party primarily located?',
        fields: [
          { kind: 'select', datasource: 'state', store_value: 'name' },
        ],
        store: 'choice_of_low_state',
        next: 'input_4',
      }
    },
    {
      id: 'input_4',
      kind: 'Input',
      content: {
        question: "What is the name of the Recipient?",
        fields: [
          { kind: 'text', store: 'recipient' },
        ],
        next: 'single_5',
      }
    },
    {
      id: 'single_5',
      kind: 'Single',
      content: {
        question: 'Is Recipient an individual or an entity?',
        fields: [
          { kind: 'choice', label: 'Individual' },
          { kind: 'choice', label: 'Entity' },
        ],
        store: 'recipient_type',
        next: 'input_6',
      },
    },
    {
      id: 'input_6',
      kind: 'Input',
      content: {
        question: 'Please provide a brief description of the information to be shared.',
        description: `Following are some examples of the description of confidential information:
        •	The location of real property that is being offered for sale, lease or financing.
        •	The structure of a real estate, business or financing transaction.
        •	The description of a proprietary formula.
        •	The description of a proprietary software application.`,
        fields: [
          { kind: 'textarea', store: 'description', rows: "5" },
        ],
        next: 'final',
      },
    },
    {
      id: 'final',
      kind: 'Final',
      content: {
        kind: 'Form',
        form: 'nda',
      }
    }
  ],
}
