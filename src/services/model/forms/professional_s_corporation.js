/* eslint-disable */
export default {
  name: "professional_s_corporation",
  description: "Creating The Professional S-Corporation",
  start: "single_1",
  kind: "Form",
  step: 12,
  nodes: [
    {
      id: "single_1",
      kind: "Single",
      content: {
        question: "In which state would you like to incorporate your company?",
        fields: [
          { kind: "choice", label: "California", next: "goto_0" },
          { kind: "choice", label: "Delaware", next: "goto_1" }
        ],
        note: {
          title: 'State of incorporation',
          content: `<ul>
            <li>You can incorporate your business in any state, even if you are not actually going to be conducting business there. However, you will be required to provide an address in the state of incorporation. If you want to incorporate in Delaware but do not have a Delaware address, there are services which will provide a registered agent address in Delaware.</li>
            <li>In deciding in which state to incorporate, it is important to note that there may be adverse tax consequences to incorporating in one state over another. For example, if you incorporate in Delaware, but conduct all of your business in California, you will still be required to pay a Delaware franchise tax in addition to California taxes. If you incorporate in California and conduct all of your business in California, you will not pay Delaware taxes.</li>
          </ul>`
        }
      }
    },
    {
      id: "goto_0",
      kind: "Goto",
      content: {
        kind: "form",
        id: "ca_professional_s_corporation"
      }
    },
    {
      id: "goto_1",
      kind: "Goto",
      content: {
        kind: "form",
        id: "de_professional_s_corporation"
      }
    },
  ]
};
