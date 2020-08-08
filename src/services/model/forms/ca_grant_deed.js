/* eslint-disable */
export default {
  name: 'ca_grant_deed',
  description: 'Creating The California Grant Deed',
  start: 'input_1',
  kind: 'Form',
  step: 12,
  nodes: [
    {
      id: 'input_1',
      kind: 'Input',
      content: {
        question: "What is the Assessor's Parcel Number of the Property?",
        fields: [{ kind: 'text', store: 'apn' }],
        next: 'input_2',
      },
    },
    {
      id: 'input_2',
      kind: 'Input',
      content: {
        question: 'Where (name and address) should the Grant Deed be mailed after it is recorded?',
        fields: [
          { kind: 'text', store: 'deed_return_name', placeholder: 'Name' },
          {
            kind: 'text',
            store: 'deed_return_address_1',
            placeholder: 'Address 1',
          },
          {
            kind: 'text',
            store: 'deed_return_address_2',
            placeholder: 'Address 2',
            optional: true,
          },
          { kind: 'text', store: 'deed_return_city', placeholder: 'City' },
          { kind: 'text', store: 'deed_return_state', placeholder: 'State' },
          {
            kind: 'text',
            store: 'deed_return_zipcode',
            placeholder: 'Zipcode',
          },
        ],
        next: 'single_3',
      },
    },
    {
      id: 'single_3',
      kind: 'Single',
      content: {
        question: 'Do you want future tax bills to be sent to the same address (as the Grant Deed) or to some other address?',
        fields: [
          {
            kind: 'choice',
            label: 'Same',
            value: 'tax_addressee_1',
            next: 'yesno_4.5',
          },
          {
            kind: 'choice',
            label: 'Other',
            value: 'tax_addressee_2',
            next: 'input_4',
          },
        ],
        store: 'tax_addressee_type',
      },
    },
    {
      id: 'yesno_4.5',
      kind: 'YesNo',
      content: {
        question: "Did the current owner (Grantor) take title under a name that differs from Grantor's current legal name?",
        fields: [
          { kind: 'choice', label: 'Yes', next: 'input_4.6' },
          { kind: 'choice', label: 'No', next: 'single_5' },
        ],
      },
    },
    {
      id: 'input_4',
      kind: 'Input',
      content: {
        question: 'What is the name and address to which future tax bills should be sent?',
        fields: [
          { kind: 'text', store: 'tax_name', placeholder: 'Name' },
          { kind: 'text', store: 'tax_address_1', placeholder: 'Address 1' },
          {
            kind: 'text',
            store: 'tax_address_2',
            placeholder: 'Address 2',
            optional: true,
          },
          { kind: 'text', store: 'tax_city', placeholder: 'City' },
          { kind: 'text', store: 'tax_state', placeholder: 'State' },
          { kind: 'text', store: 'tax_zipcode', placeholder: 'Zipcode' },
        ],
        next: 'yesno_4.5',
      },
    },
    {
      id: 'input_4.6',
      kind: 'Input',
      content: {
        question: 'Under what name did Grantor acquire title?',
        fields: [
          { kind: 'text', store: 'grantor_former_name', placeholder: 'Name' },
        ],
        next: 'single_5',
      },
    },
    {
      id: 'single_5',
      kind: 'Single',
      content: {
        question: 'Is the current owner of the property (the Grantor) an individual, entity or trustee of a trust?',
        fields: [
          { kind: 'choice', label: 'Entity', value: 'entity', next: 'input_6' },
          {
            kind: 'choice',
            label: 'Trustee',
            value: 'trustee',
            next: 'input_5.3',
          },
          {
            kind: 'choice',
            label: 'Individual',
            value: 'individual',
            next: 'input_5.1',
          },
        ],
        store: 'grantor_type',
      },
    },
    {
      id: 'input_5.1',
      kind: 'Input',
      content: {
        question: 'What is the legal name of the individual Grantor?',
        fields: [
          {
            kind: 'text',
            store: 'individual_grantor_name',
            placeholder: 'Name',
          },
        ],
        next: 'single_5.2',
      },
    },
    {
      id: 'single_5.2',
      kind: 'Single',
      content: {
        question: 'In what capacity is the individual grantor conveying title?',
        fields: [
          { kind: 'choice', label: 'A married man as his separate property' },
          { kind: 'choice', label: 'A married woman as her separate property' },
          { kind: 'choice', label: 'An unmarried individual' },
        ],
        store: 'individual_grantee_status',
        next: 'single_3_6',
      },
    },
    {
      id: 'input_5.3',
      kind: 'Input',
      content: {
        question: 'What is the legal name of the trustee(s) and the trust - For example, John Doe, trustee of the Doe Family Trust?',
        fields: [{ kind: 'text', store: 'name_of_grantor_trustee_and_trust' }],
        next: 'single_3_6',
      },
    },
    {
      id: 'input_6',
      kind: 'Input',
      content: {
        question: 'What is the legal name of the Grantor - that is, the name used in its formation documents?',
        fields: [
          {
            kind: 'text',
            store: 'grantor_name',
            placeholder: 'Name',
          },
        ],
        next: 'single_7',
      },
    },
    {
      id: 'single_7',
      kind: 'Single',
      content: {
        question: 'What type of entity is the Grantor: corporation, limited liability company, limited partnership or general partnership?',
        fields: [
          { label: 'Corporation', value: 'corporation' },
          { label: 'Limited Liability Company' },
          { label: 'Limited Partnership' },
          { label: 'General Partnership' },
        ],
        store: 'grantor_entity_type',
        next: 'input_8',
      },
    },
    {
      id: 'input_8',
      kind: 'Input',
      content: {
        question: 'What state was Grantor formed in?',
        fields: [{ kind: 'text', store: 'grantor_state' }],
        next: 'single_3_6',
      },
    },
    {
      id: 'single_3_6',
      kind: 'Single',
      content: {
        question: 'Is the Grantee an individual, entity or trustee of a trust?',
        fields: [
          {
            kind: 'choice',
            label: 'Trustee',
            value: 'trustee',
            next: 'input_3_6.3',
          },
          {
            kind: 'choice',
            label: 'Individual',
            value: 'individual',
            next: 'input_3_6.1',
          },
          {
            kind: 'choice',
            label: 'Entity',
            value: 'entity',
            next: 'input_3_7',
          },
        ],
        store: 'grantee_type',
      },
    },
    {
      id: 'input_3_6.1',
      kind: 'Input',
      content: {
        question: 'What is the legal name of the individual Grantee?',
        fields: [
          {
            kind: 'text',
            store: 'individual_grantee_name',
            placeholder: 'Name',
          },
        ],
        next: 'single_3_6.2',
      },
    },
    {
      id: 'single_3_6.2',
      kind: 'Single',
      content: {
        question: 'In what capacity is the individual grantee taking title?',
        fields: [
          { kind: 'choice', label: 'A married man as his separate property' },
          { kind: 'choice', label: 'A married woman as her separate property' },
          { kind: 'choice', label: 'An unmarried person' },
        ],
        store: 'individual_grantee_status',
        next: 'final',
      },
    },
    {
      id: 'input_3_6.3',
      kind: 'Input',
      content: {
        question: 'What is the legal name of the trustee(s) and the trust - For example, John Doe, trustee of the Doe Family Trust?',
        fields: [{ kind: 'text', store: 'name_of_trustee_and_trust' }],
        next: 'final',
      },
    },
    {
      id: 'input_3_7',
      kind: 'Input',
      content: {
        question: 'What is the legal name of the Grantee - that is, the name used in its formation documents?',
        fields: [{ kind: 'text', store: 'entity_grantee_name' }],
        next: 'single_3_8',
      },
    },
    {
      id: 'single_3_8',
      kind: 'Single',
      content: {
        question: 'What type of entity is the Grantee?',
        fields: [
          { kind: 'choice', label: 'Corporation' },
          { kind: 'choice', label: 'Limited liability company' },
          { kind: 'choice', label: 'Limited partnership' },
          { kind: 'choice', label: 'General partnership' },
        ],
        store: 'grantee_entity_type',
        next: 'input_3_9',
      },
    },
    {
      id: 'input_3_9',
      kind: 'Input',
      content: {
        question: 'What state was Grantee formed in?',
        fields: [{ kind: 'text', store: 'grantee_state' }],
        next: 'final',
      },
    },
    {
      id: 'final',
      kind: 'Final',
      content: {
        kind: 'Form',
        form: 'ca_grant_deed',
      },
    },
  ],
}
