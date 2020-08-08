/* eslint-disable */
export default {
  name: 'ca_llc',
  description: 'Creating The California Limited Liability Company',
  start: 'input_1',
  kind: 'Form',
  step: 9, // TODO FIX
  attach: {
    NOTE_1: `California Corporations Code section 17701.08 requires:

      <ul>
        <li>The LLC name must include: LLC, L.L.C., Limited Liability Company, Limited Liability Co., Ltd. Liability Company, or Ltd Liability Co.</li>
        <li>The LLC name may not include: bank, trust, trustee, incorporated, inc., corporation, or corp.</li>
        <li>The LLC name may not include: insurer, insurance company, or any other words suggesting that the LLC is in the business of issuing policies of insurance and assuming insurance risks.</li>
        <li>The name is not likely to mislead the public and is distinguishable from other LLCs of record or reserved with the California Secretary of State.</li>
      </ul>There are legal limitations on what name can be used for the LLC. For general LLC name requirements and restrictions or for information on reserving an LLC name prior to submitting Form LLC-1, go to: <a href="http://www.sos.ca.gov/business/be/name-availability" target="_blank">www.sos.ca.gov/business/be/name-availability</a>

      A name reservation is not required to submit Form LLC-1.

      A preliminary search of LLC names already of record can be made online through our Business Search at BusinessSearch.sos.ca.gov. Please note: The Business Search is not intended to serve as a formal name availability search. For information on checking or reserving a name, go to: <a href="http://www.sos.ca.gov/business/be/name-availability" target="_blank">www.sos.ca.gov/business/be/name-availability</a>`,
    NOTE_2: `The designated office does not need be the place of the LLC's activity in California. (Cal. Corp. Code, Section 17701.13.)

      The complete street address is required, including the street name and number, city and zip code.

      Address must be a physical address.

      Do not enter a P.O. Box address, and “in care of” address, or abbreviate the name of the city.`,
    NOTE_4: `This address will be used for mailing purposes and may be a P.O. Box address or “in care of” an individual or entity.

      Do not abbreviate the name of the city.`,
    NOTE_5: `An Agent for Service of Process is responsible for accepting legal documents (e.g. service of process, lawsuits, other types of legal notices, etc.) on behalf of the LLC.

      You must provide information for either an individual OR a registered corporate agent, not both.

      If using a registered corporate agent, the corporation must have a current agent registration certificate on file with the California Secretary of State as required by Section 1505 of the California Corporations Code.`,
    NOTE_6: `The complete street address is required, including the street name and number, city and zip code.

      Do not enter a P.O. Box address, an “in care of” address, or abbreviate the name of the city.

      Many times, a small LLC will designate a member or manager as the agent for service of process.

      The individual agent should be aware that the name and the physical street address of the agent for service of process is a public record, open to all (as are all the addresses of the LLC provided in filings.)`,
    NOTE_7: `Before a corporation is designated as agent for the LLC, that corporation must have a current agent registration certificate on file with the California Secretary of State as required by Section 1505 stating the address(es) of the registered corporate agent and the authorized employees that will accept service of process of legal documents and notices on behalf of the LLC.

      Advanced approval must be obtained from a registered corporate agent prior to designating that corporation as your agent for service of process.

      No California or foreign corporation may register as a California corporate agent unless the corporation currently is authorized to engage in business in California and is in good standing on the records of the California Secretary of State.

      Provide your Registered Corporate Agent’s exact name as registered with the California Secretary of State. To confirm that you are providing the exact name of the Registered Corporate Agent, go to <a href="https://businessfilings.sos.ca.gov/frmlist1505s.asp" target="_blank">https://businessfilings.sos.ca.gov/frmlist1505s.asp</a>`,
    NOTE_8: `Every LLC is required to have at least one member. If no manager is appointed or elected, all members are managers.

      A member is an owner of the company similar to a shareholder in a corporation.`,
  },
  nodes: [
    {
      id: 'input_1',
      kind: 'Input',
      content: {
        question:
          'Enter the name of the proposed LLC exactly as it is to appear on the records of the California Secretary of State.',
        fields: [{ kind: 'text', store: 'llc_name' }],
        next: 'input_2',
        note: {
          title: 'Explanatory Note',
          attach: ['NOTE_1'],
        },
      },
    },
    {
      id: 'input_2',
      kind: 'Input',
      content: {
        question:
          "Enter the complete street address, city and zip code of the LLC's initial designated office in California. The designated office is where copies of the organizational documents, operating agreement financial and other business records must be kept.",
        fields: [
          {
            kind: 'text',
            store: 'address_street',
            placeholder: 'Street Address',
          },
          { kind: 'text', store: 'address_city', placeholder: 'City' },
          { kind: 'text', store: 'address_zipcode', placeholder: 'Zipcode' },
        ],
        next: 'yesno_3',
        note: {
          title: 'Explanatory Note',
          attach: ['NOTE_2'],
        },
      },
    },
    {
      id: 'yesno_3',
      kind: 'YesNo',
      content: {
        question: 'Will the LLC have a different mailing address?',
        fields: [
          { label: 'Yes', next: 'input_4', value: 'yes' },
          { label: 'No', next: 'yesno_5', value: 'no' },
        ],
        store: 'have_different_mailing_address',
      },
    },
    {
      id: 'input_4',
      kind: 'Input',
      content: {
        question:
          "Enter the name, complete street address, city and zip code of the LLC's agent for service of process.",
        fields: [
          {
            kind: 'text',
            store: 'mailing_address_street',
            placeholder: 'Street Address',
          },
          { kind: 'text', store: 'mailing_address_city', placeholder: 'City' },
          {
            kind: 'text',
            store: 'mailing_address_state',
            placeholder: 'State',
          },
          {
            kind: 'text',
            store: 'mailing_address_zipcode',
            placeholder: 'Zipcode',
          },
        ],
        next: 'yesno_5',
        note: {
          title: 'Explanatory Note',
          attach: ['NOTE_4'],
        },
      },
    },
    {
      id: 'yesno_5',
      kind: 'YesNo',
      content: {
        question: `Will the Agent be an Individual or Registered Corporate Agent?
          <small>The LLC must have an Agent for Service of Process. There are two types of Agents that can be named: an individual (e.g. member, manager, or any other individual) who resides in California with a physical California address, or a registered corporate agent qualified with the California Secretary of State.</small>`,
        fields: [
          { label: 'Individual', next: 'input_6' },
          {
            label: 'Registered Corporate Agent',
            next: 'input_7_registered_corporate_agent',
          },
        ],
        note: {
          title: 'Explanatory Note',
          attach: ['NOTE_5'],
        },
      },
    },
    {
      id: 'input_6',
      kind: 'Input',
      content: {
        question:
          "Enter the complete name, street address, city and zip code of the LLC's agent for service of process.",
        fields: [
          {
            kind: 'text',
            store: 'agent_first_name',
            placeholder: 'First Name',
          },
          {
            kind: 'text',
            store: 'agent_middle_name',
            placeholder: 'Middle Name',
            optional: true,
          },
          { kind: 'text', store: 'agent_last_name', placeholder: 'Last Name' },
          {
            kind: 'text',
            store: 'agent_suffix',
            placeholder: 'Suffix',
            optional: true,
          },
          {
            kind: 'text',
            store: 'agent_address_street',
            placeholder: 'Street Address',
          },
          { kind: 'text', store: 'agent_address_city', placeholder: 'City' },
          {
            kind: 'text',
            store: 'agent_address_zipcode',
            placeholder: 'Zipcode',
          },
        ],
        next: 'single_8',
        note: {
          title: 'Explanatory Note',
          attach: ['NOTE_6'],
        },
      },
    },
    {
      id: 'input_7',
      kind: 'Input',
      content: {
        question:
          'Enter the name of the initial registered corporate agent exactly as registered in California.',
        fields: [
          {
            kind: 'text',
            store: 'registered_corporate_agent_name',
            placeholder: 'Name',
          },
          {
            kind: 'text',
            store: 'registered_corporate_agent_address_street',
            placeholder: 'Street Address',
          },
          {
            kind: 'text',
            store: 'registered_corporate_agent_address_city',
            placeholder: 'City',
          },
          {
            kind: 'text',
            store: 'registered_corporate_agent_address_zipcode',
            placeholder: 'Zipcode',
          },
        ],
        next: 'single_8',
        note: {
          title: 'Explanatory Note',
          attach: ['NOTE_7'],
        },
      },
    },
    {
      id: 'input_7_registered_corporate_agent',
      kind: 'Input',
      content: {
        question:
          'Enter the name of the initial registered corporate agent exactly as registered in California.',
        fields: [
          {
            kind: 'text',
            store: 'registered_corporate_agent_name',
            placeholder: 'Name',
          },
        ],
        next: 'single_8',
        note: {
          title: 'Explanatory Note',
          attach: ['NOTE_7'],
        },
      },
    },
    {
      id: 'single_8',
      kind: 'Single',
      content: {
        question:
          'Will the LLC be managed by one manager, more than one manager or all limited liability company member(s)?',
        fields: [
          { label: 'One Manager', value: 'one' },
          { label: 'More than one manager', value: 'more' },
          { label: 'All limited liability company member(s)', value: 'all' },
        ],
        store: 'manage_by',
        next: 'input_9',
        note: {
          title: 'Explanatory Note',
          attach: ['NOTE_8'],
        },
      },
    },
    {
      id: 'input_9',
      kind: 'Input',
      content: {
        question:
          'Enter the name of the Organizer. This is the person responsible for forming the LLC and need not be a member or manager of the LLC.',
        fields: [
          {
            kind: 'text',
            store: 'organizer_first_name',
            placeholder: 'First Name',
          },
          {
            kind: 'text',
            store: 'organizer_middle_name',
            placeholder: 'Middle Name',
            optional: true,
          },
          {
            kind: 'text',
            store: 'organizer_last_name',
            placeholder: 'Last Name',
          },
        ],
        next: 'final',
      },
    },
    {
      id: 'final',
      kind: 'Final',
      content: {
        kind: 'Form',
        form: 'ca_llc',
      },
    },
  ],
}
