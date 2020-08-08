/* eslint-disable */
export default {
  name: 'de_professional_c_corporation',
  description: 'Creating The Delaware Professional C-Corporation',
  start: 'input_1',
  kind: 'Form',
  step: 9,
  nodes: [
    {
      id: 'input_1',
      kind: 'Input',
      content: {
        question: 'What will be the profession of your corporation?',
        fields: [{ kind: 'text', store: 'company_profession' }],
        next: 'input_2',
        note: {
          title: 'What will be the profession of your corporation?',
          content: 'You should write the formal name of your profession, describing your profession as what the profession is, not what the professionals are called. For example, a lawyer would indicate “law”, a dentist would indicate “dentistry”, an accountant would indicate “accountancy”, a marriage and family therapist would indicate “marriage and family therapy”. You can ask yourself, I engage in the profession of ...',
        },
      },
    },
    {
      id: 'input_2',
      kind: 'Input',
      content: {
        question: `What will be the name of your company?<br />
                <small>Your profession may have restrictions on the name of your corporation, consult your regulatory board for any restrictions.</small>`,
        fields: [{ kind: 'text', store: 'company_name' }],
        next: 'single_3',
        note: {
          title: 'Name of your company',
          content: `<ul>
            <li>The name of your corporation cannot contain the words "company", "corporation" or "incorporated”, or any affix or prefix indicating it is a corporation.</li>
            <li>The name of your corporation must contain
              <ul>
                <li>a word or words descriptive of your professional service, or the last name of at least one shareholder, and</li>
                <li>"chartered", "professional association" or "P.A."</li>
              </ul>
            </li>
            <li>The name of your corporation cannot include the words “bank” or “trust”.</li>
            <li>The name of your business cannot be misleading or confusingly similar to that of a preexisting corporation. You can check search engines and <a href="https://icis.corp.delaware.gov/Ecorp/EntitySearch/NameSearch.aspx" target="_blank">here</a> to see if there is a preexisting entity with a similar name. A confusingly similar name does not have to be exactly the same, it includes subtle differences – like upper instead of lower case letters; “&” instead of “and”; or “7” instead of “seven”.
              <ul>
                <li>“Entity” includes corporations, partnerships, LLCs, or trusts.</li>
                <li>Similar names may be approved with written consent, or by special application.</li>
              </ul>
            </li>
            <li>You may also want to consider whether your corporate name will be eligible for trademark protection (see section on Trademark for more information).</li>
            <li>You should input the entire name of the company as you would like it to appear on the records of the Delaware Secretary of State.</lil>
          </ul>`,
        },
      },
    },
    {
      id: 'single_3',
      kind: 'Single',
      content: {
        question: 'What is the total number of shares the corporation will be authorized to issue?',
        fields: [
          { kind: 'choice', label: '1,000,000', value: 1000000 },
          { kind: 'choice', label: '100,000', value: 100000 },
          { kind: 'number', label: 'Other' },
        ],
        store: 'number_of_shares',
        next: 'single_4',
        note: {
          title: 'Number of Shares',
          content: `<ul>
            <li>Authorized shares are those which the company is allowed to issue – shares only become “issued” once they are sold to someone.</li>
            <li>Shares that are authorized but not yet issued are retained by the corporation (commonly called “treasury shares”).</li>
            <li>You can only issue (or sell) as many shares as you have authorized. If you later decide you want to authorize more shares, you will have to pay a fee to the state to amend your articles of incorporation (the paperwork you file with the state of Delaware to establish your corporation).</li>
            <li>The total number of shares is somewhat arbitrary; the more important part is the overall percentage of ownership held by each shareholder. Owning one out of one hundred shares is the same as owning one million out of one hundred million shares. However, authorizing more shares can make it easier to issue shares to more people. For example, if you only authorize 10 shares, you can only issue shares to 10 people (without issuing fractional shares), and only in increments of 10% (like 10%, 20%, 30%, etc). By authorizing 100 shares, you could issue shares to 100 people, and in increments of 1% (like a 33% interest for example). In determining the total amount to authorize, consider the future of the corporation – will you issue stock or options to employees, directors, or investors?</li>
            <li>In determining how many shares to authorize and their par value, it is important to consider franchise taxes. Delaware charges an annual tax to its corporations based on either the number of shares authorized, or a calculation involving the corporation’s assets. The corporation can select which method it would like to use to calculate its tax bill.
              <ul>
              <li>
                Authorized shares method:
                <ul>
                  <li>There is a $175 fee for corporations with between 1 and 5,000 authorized shares, or a $250 fee for corporations with between 5,001 and 10,000 shares.</li>
                  <li>After the first 10,000 shares, there is a $75 fee for each additional 10,000 shares (or portion thereof).</li>
                  <li>
                    For example, authorizing 100,000 shares would result in a franchise tax bill of $925.
                    <ul>
                      <li>First 10,000 shares results in fee of $250</li>
                      <li>Next 90,000 shares is a fee of $75 per 10,000, so $75 * 9 = $675
                        <ul>
                          <li>
                          Total = $250 + $675 = $925
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Authorizing one million shares would result in a franchise tax bill of $7,675.</li>
                </ul>
              </li>
              <li>
                Assumed Par Value Capital
                <ul>
                  <li>There is a $350 fee per $1,000,000 or portion thereof of Assumed Par Value Capital.</li>
                  <li>
                    The Assumed Par Value Capital is dependent upon the number of authorized shares, the number of issued shares, and the corporation’s total gross assets.
                    <ul>
                      <li>Assumed Par Value = Total Gross Assets divided by the Total Issued Shares</li>
                      <li>Assumed Par Value Capital = Assumed Par Value (from above) multiplied by the Authorized Shares</li>
                    </ul>
                  </li>
                  <li>
                    For example, issuing 500,000 of 1,000,000 authorized shares with total gross assets of $1,000,000 would result in a franchise tax bill of $700.
                    <ul>
                      <li>Assumed Par Value = $1,000,000 Total Gross Assets / 500,000 Total Issued Shares = 2.0</li>
                      <li>Assumed Par Value Capital = 2.0 Assumed Par Value x 1,000,000 Authorized Shares = 2,000,000</li>
                      <li>2,000,000 / $1,000,000 = 2</li>
                      <li>2 * $350 = $700</li>
                    </ul>
                  </li>
                </ul>

              </li>
              <li>
                The Delaware Franchise Tax Board has a preliminary franchise tax calculator which can help to estimate franchise tax costs. Available <a href="https://corp.delaware.gov/taxcalc.shtml" target="_blank">here</a>.
              </li>
              </ul>
            </li>
            <li>
              Notes
              <ul>
                <li>The Assumed Par Value Capital is based upon the assumption that assumed par value (as calculated) is higher than the par value assigned in the Articles of Incorporation</li>
              </ul>
            </li>
          </ul>`,
        },
      },
    },
    {
      id: 'single_4',
      kind: 'Single',
      content: {
        question: 'What is the par value of the shares?',
        fields: [
          { kind: 'choice', label: '$0.001', value: 0.001 },
          { kind: 'choice', label: '$0.0001', value: 0.0001 },
          { kind: 'number', label: 'Other' },
        ],
        store: 'par_value_of_shares',
        next: 'input_5',
        note: {
          title: 'Par value',
          content: `<ul>
            <li>The par value is essentially the assigned price of the shares when they are issued. So if the company issued 1,000 shares at a par value of $0.01 per share, the total cost (and value) of the shares would be $10.00. So if the company issued 1,000,000 to the founders, with a par value of $0.0001, the founders would have to pay $100 for the shares.</li>
            <li>Many attorneys recommend setting a par value of $0.0001 or $0.00001 per share. Setting the par value lower can help keep the franchise tax as low as possible (see Number of Shares, above).</li>
            <li>You can only issue (or sell) as many shares as you have authorized. If you later decide you want to authorize more shares, you will have to pay a fee to the state to amend your articles of incorporation (the paperwork you file with the state of California to establish your corporation). In California, unlike Delaware, there is no an additional tax or fee for having a higher number of authorized shares.</li>
            <li>Notes
              <ul>
                <li>Must include a par value or “a statement that all such shares are to be without par value” (§ 102(a)(4), <a href="http://delcode.delaware.gov/title8/c001/sc01/index.shtml" target="_blank">link</a>)</li>
              </ul>
            </li>
          </ul>`,
        },
      },
    },
    {
      id: 'input_5',
      kind: 'Input',
      content: {
        question: 'Who will incorporate the company?',
        fields: [
          {
            kind: 'text',
            store: 'incorporator_name_firstname',
            placeholder: 'First Name',
          },
          {
            kind: 'text',
            store: 'incorporator_name_lastname',
            placeholder: 'Last Name',
          },
        ],
        next: 'input_6',
        note: {
          title: 'Name of incorporator (8 Del. C. 1953, § 101, <a href="http://delcode.delaware.gov/title8/c001/sc01/index.shtml" target="_blank">link</a>)',
          content: `<ul>
            <li>The incorporator is the person who is organizing the corporation. The incorporator signs documents and acts for the corporation until the board of directors is elected.</li>
            <li>The incorporator can be an entity or any adult; it need not be an officer, director, or shareholder of the corporation.</li>
          </ul>`,
        },
      },
    },
    {
      id: 'input_6',
      kind: 'Input',
      content: {
        question: "What is the incorporator's mailing address?",
        fields: [
          {
            kind: 'text',
            store: 'incorporator_address_street',
            placeholder: 'Street',
          },
          {
            kind: 'text',
            store: 'incorporator_address_city',
            placeholder: 'City',
          },
          {
            kind: 'text',
            store: 'incorporator_address_state',
            placeholder: 'State',
          },
          {
            kind: 'text',
            store: 'incorporator_address_zipcode',
            placeholder: 'ZIP Code',
          },
        ],
        next: 'yesno_7',
        note: {
          title: 'Address of incorporator',
          content: `<ul>
            <li>The mailing address of the incorporator does not have to be a Delaware address.</li>
            <li>You should note that this will be a public record.</li>
          </ul>`,
        },
      },
    },
    {
      id: 'yesno_7',
      kind: 'YesNo',
      content: {
        question: 'Will the company have an office in Delaware?',
        fields: [
          { kind: 'choice', label: 'Yes', next: 'single_8' },
          { kind: 'choice', label: 'No', next: 'input_10' },
        ],
        note: {
          title: 'Office in Delaware?',
          content: `<ul>
            <li>In Delaware, the corporation itself can serve as its own registered agent if it has a Delaware office.</li>
          </ul>`,
        },
      },
    },
    {
      id: 'single_8',
      kind: 'Single',
      content: {
        question: 'Who will serve as the registered agent of the company?',
        fields: [
          { kind: 'choice', label: '${company_name}', next: 'input_9' },
          {
            kind: 'text',
            label: 'Other',
            next: 'input_11',
          },
        ],
        store: 'registered_agent_name',
        note: {
          title: 'Name of registered agent (8 Del. C. 1953, § 132, <a href="http://delcode.delaware.gov/title8/c001/sc03/" target="_blank">link</a>)',
          content: `<ul>
            <li>The registered agent is the local business or individual who receives official correspondence for the corporation. For example, the registered agent would be served (physically handed the papers) if the corporation were sued. The registered agent can be the corporation itself if it has an office in Delaware; any individual adult resident of Delaware; or a corporation, partnership, LLC, or trust, with an office in Delaware. Alternatively, there are Delaware companies that will serve as registered agents for corporations operating outside Delaware.</li>
            <li>The registered agent should agree beforehand to accept service of process on behalf of the corporation.</li>
          </ul>`,
        },
      },
    },
    {
      id: 'input_9',
      kind: 'Input',
      content: {
        question: 'What is the Delaware address of the company?',
        fields: [
          {
            kind: 'text',
            store: 'company_address_street',
            placeholder: 'Street',
          },
          { kind: 'text', store: 'company_address_city', placeholder: 'City' },
          {
            kind: 'text',
            store: 'company_address_state',
            placeholder: 'State',
          },
          {
            kind: 'text',
            store: 'company_address_zipcode',
            placeholder: 'ZIP Code',
          },
        ],
        next: 'final_1',
        note: {
          title: 'Address of Corporation',
          content: `<ul>
            <li>This is the Delaware address where official paperwork from the state and legal proceedings would be sent. The address must be in Delaware, and must contain the street, number, city, county, and postal code. There must regularly be an individual at this address during business hours (so, for example, it cannot be a P.O. Box).</li>
            <li>Cannot be a P.O. Box, “in care of”, or have a city abbreviation (i.e., no “LA”)</li>
            <li>You should note that this will be a public record.</li>
          </ul>`,
        },
      },
    },
    {
      id: 'input_10',
      kind: 'Input',
      content: {
        question: 'Who will serve as the registered agent of the company?',
        fields: [{ kind: 'text', store: 'registered_agent_name' }],
        next: 'input_11',
        note: {
          title: 'Name of registered agent (8 Del. C. 1953, § 132, <a href="http://delcode.delaware.gov/title8/c001/sc03/" target="_blank">link</a>)',
          content: `<ul>
            <li>The registered agent is the local business or individual who receives official correspondence for the corporation. For example, the registered agent would be served (physically handed the papers) if the corporation were sued. The registered agent can be any individual adult resident of Delaware, or a corporation, partnership, LLC, or trust, with an office in Delaware. Alternatively, there are Delaware companies that will serve as registered agents for corporations operating outside Delaware.</li>
            <li>The registered agent should agree beforehand to accept service of process on behalf of the corporation.</li>
          </ul>`,
        },
      },
    },
    {
      id: 'input_11',
      kind: 'Input',
      content: {
        question: "What is <strong>${registered_agent_name}</strong>'s primary address?",
        fields: [
          {
            kind: 'text',
            store: 'registered_agent_address_street',
            placeholder: 'Street',
          },
          {
            kind: 'text',
            store: 'registered_agent_address_city',
            placeholder: 'City',
          },
          {
            kind: 'text',
            store: 'registered_agent_address_state',
            placeholder: 'State',
          },
          {
            kind: 'text',
            store: 'registered_agent_address_zipcode',
            placeholder: 'ZIP Code',
          },
        ],
        next: 'final_2',
        note: {
          title: 'Address of registered agent',
          content: `<ul>
            <li>This is the Delaware address where official paperwork from the state and legal proceedings would be sent. The address must be in Delaware, and must contain the street, number, city, county, and postal code. There must regularly be an individual at this address during business hours (so, for example, it cannot be a P.O. Box).</li>
            <li>Cannot be a P.O. Box, “in care of”, or have a city abbreviation (i.e., no “LA”)</li>
            <li>You should note that this will be a public record.</li>
          </ul>`,
        },
      },
    },
    {
      id: 'final_1',
      kind: 'Final',
      content: {
        kind: 'Form',
        form: 'de_form_articles_of_professional_c_incorporation_1',
      },
    },
    {
      id: 'final_2',
      kind: 'Final',
      content: {
        kind: 'Form',
        form: 'de_form_articles_of_professional_c_incorporation_2',
      },
    },
  ],
}
