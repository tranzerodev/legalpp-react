/* eslint-disable */
export default {
  name: 'llc',
  description: 'Launching Operating Agreements',
  start: 'single_1',
  kind: 'Form',
  step: 1,
  nodes: [
    {
      id: 'single_1',
      kind: 'Single',
      content: {
        question: 'In what state was the limited liability company organized?',
        fields: [
          { kind: 'choice', label: 'California', next: 'goto_0' },
          { kind: 'choice', label: 'Delaware', next: 'goto_1' },
        ],
      },
    },
    {
      id: 'goto_0',
      kind: 'Goto',
      content: {
        kind: 'form',
        id: 'ca_single_member_llc',
      },
    },
    {
      id: 'goto_1',
      kind: 'Goto',
      content: {
        kind: 'form',
        id: 'de_single_member_llc',
      },
    },
  ],
}
