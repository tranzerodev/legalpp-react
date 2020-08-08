export default {
  name: 'payroll',
  description: 'Does the business need to set up Payroll?',
  start: 'action_0',
  kind: 'Topic',
  attach: {
    NOTE_1:
      'Generally, a business must withhold income taxes, withhold and pay Social Security and Medicare taxes, and pay unemployment tax on wages paid to an employee. (IRC §§ 3111, 3301, and 3402) If a business has a worker who is not employed by another company, provides regular services to the business, and works under the control of the business, such worker is an employee. (See Treas. Reg. § 31.3401(c)-1(b)) Accordingly, the business is required to set up payroll for such worker in order to withhold federal income tax from wages and withhold and pay payroll taxes on wages.',
    NOTE_2: `And corporate officers who provide more than minor services to their corporation and receive, or are entitled to receive, compensation are employees and are subject to federal employment taxes. (IRC §3121(d)(1); Treas. Reg. §31.3121(d)-1(b))
      Although a corporation has to set up payroll in such cases, how much it pays its owner-officers will likely be affected by whether the business is an S corporation or a C corporation. For more information on this issue, click <a class="lg-show-description" href="#link_2">here</a>.<description id="link_2">{{LINK_2}}<a href="#">Close</a></description>`,
    NOTE_3: `Employers are required to pay payroll taxes on employment wages paid by the employer. (IRC §3111) Subject to certain exceptions, “employment” is defined as any service performed by an employee within the U.S. (or outside the U.S. by a citizen or resident of the U.S. as an employee for an American employer). (IRC §3121(b)) An “employee” includes any person who “is subject to the will and control of the employer not only as to what shall be done but how it shall be done.” (Treas. Reg. § 31.3401(c)-1(b); Rev. Ruling 87-41, 1987-1 CB 296) The IRS has provided a 20 factor test as an aid to determining “whether sufficient control is present to establish an employer-employee relationship.” (Id.) For more information on how to determine whether a worker is an independent contractor or an employee, click the link below. 
      <a href='https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee' target='_blank'>https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee</a>`,
    NOTE_4:
      'A sole proprietor who works in his own business cannot be an employee since an employee is one who is employed by another person or entity called the employer. (See IRC §3121(d)) For the same reason, a partner cannot be an employee of the partnership. (See Rev. Ruling 69-184) However, both sole proprietors and partners must pay self-employment tax on their self-employment income. (IRC §1401).',
    NOTE_5:
      'A domestic LLC that has not elected to be taxed as a corporation is taxed as a partnership if it has more than one member or is a disregarded entity for income tax purposes, it if has one member. (Treas. Reg. § 301.7701-3(b)(1)) The owner of a single member LLC that is a disregarded entity cannot be an employee of that entity since it is disregarded. (Treas. Reg. § 301.7701-2(c)(2)(iv)(D)(iii)) Similarly, since a partner cannot be an employee of the partnership (See Rev. Ruling 69-184), a member of an LLC that is taxed as a partnership cannot be an employee of the LLC. However, members of LLCs that are either disregarded or taxed as partnerships must pay self-employment tax on their self-employment income arising from the business of the LLC. (IRC §1401; Treas. Reg. § 301.7701-2(c)(2)(iv)(D)(iii)).',
    // 'NOTE_6':
    //   `A licensed real estate salesperson is not considered an employee if:
    //     1) his or her compensation is based on sales or other output rather than the number of hours worked and
    //     2) he or she has a written contract with the broker that states that the salesperson will not be treated as an employee for withholding purposes. (IRC §3508)`,
    NOTE_7:
      'Like any other business, a real estate broker must withhold income taxes and pay payroll taxes only on wages paid to an employee (IRC §§ 3111, 3301, and 3402). By contrast, it generally does not need to withhold or pay any taxes on payments to independent contractors. A licensed real estate salesperson qualifies as an independent contractor (for payroll tax purposes) if: (1) his or her compensation is based on sales or other output rather than the number of hours worked and 2) he or she has a written contract with the broker that states that the salesperson will not be treated as an employee for withholding purposes. (IRC §3508)  If a real estate broker employs only independent contracts and does not have any employees, it does not need to set up payroll.',
    NOTE_8:
      'Generally, a corporation (or LLC taxed as a corporation) must withhold income taxes, withhold and pay Social Security and Medicare taxes, and pay unemployment tax on wages paid to an employee. (IRC §§ 3111, 3301, and 3402) If the corporation has workers, not employed by another company, who provide regular services to the corporation and work under the control of the corporation, such workers are employees, whether or not they are also shareholders of the corporation. (See Treas. Reg. § 31.3401(c)-1(b)) Accordingly, the corporation is required to set up payroll for such workers in order to withhold federal income tax from wages and withhold and pay payroll taxes on wages.',
    NOTE_9:
      'Like any other business, a real estate broker structured as a corporation must withhold income taxes and pay payroll taxes only on wages paid to an employee (IRC §§ 3111, 3301, and 3402). By contrast, it generally does not need to withhold income taxes or pay any payroll taxes on payments to independent contractors. A licensed real estate salesperson qualifies as an independent contractor (for payroll tax purposes) if: (1) his or her compensation is based on sales or other output rather than the number of hours worked and 2) he or she has a written contract with the broker that states that the salesperson will not be treated as an employee for withholding purposes. (IRC §3508)  Accordingly, a real estate broker is not required to withhold income taxes or pay payroll taxes on the compensation paid to any real estate sales persons who are independent contractors, but it must withhold income taxes and pay payroll taxes on any employee, including an employee who is also a shareholder.',
    NOTE_10:
      'A business must withhold income taxes and pay payroll taxes only on wages paid to an employee (IRC §§ 3111, 3301, and 3402). By contrast, it generally does not need to withhold income taxes or pay any payroll taxes on payments to independent contractors. If a business has no employees and hires only independent contractors, it does not need to set up payroll.',
    NOTE_11:
      'Like other businesses, a business structured as a corporation (or an LLC taxed as a corporation) must withhold income taxes and pay payroll taxes only on wages paid to an employee (IRC §§ 3111, 3301, and 3402). By contrast, it generally does not need to withhold income taxes or pay any payroll taxes on payments to independent contractors. However, unlike a sole proprietorship or business taxed as a partnership, a corporation must withhold income taxes and pay payroll taxes on the compensation of any owner (shareholder) who works for the corporation. Thus, a corporation whose shareholders work in the business must set up payroll.',
    LINK_2: `If your business is an S corporation, the shareholder-employees would receive two forms of income from the corporation: employment (W2) income which is subject to self-employment taxes and shareholder distributions which are not subject to self-employment taxes so long as the corporation pays the shareholders a reasonable amount of employment income. ((Rev. Rul. 59-221, 1959-1 C.B. 225; Rev. Rul. 74-44, 10974-1 C.B. 287; Spicer Accounting v. United States, 918 F.2d 90 (9th Cir. 1990)) According to the IRS, “generally, reasonable pay is the amount that a similar business would pay for the same or similar services”.  (Publication 535 (2016), Business Expenses, Employee’s Pay) In short, as long as the corporation pays a shareholder-employee a reasonable salary, all other distributions by the corporation to the shareholder-employee are free of self-employment taxes.
      C corporations, on the other hand, are tax-paying entities. Employee wages and the payroll taxes on the amounts paid are deductible by the corporation. Dividends, on the other hand, are not deductible by the corporation and are taxable to shareholders receiving them. In other words, dividends are taxed twice: once as earnings of the corporation (IRC §11)  and once as income of the shareholders. (IRC §301(c)) As a result, most small C corporations “zero out” their income by paying it to the shareholder-employees in the form of wages thereby eliminating dividends and eliminating any double taxation. However, the IRS only permits deductions for a “reasonable” allowance for salaries or other compensation for personal services actually rendered. (Treas. Reg. § 1.162-7) Any amount paid to a shareholder-employee that exceeds a reasonable salary is likely to be treated by the IRS as dividends subject to double taxation. (Treas. Reg. § 1.162-7(b)(1))`
  },
  nodes: [
    {
      id: 'action_0',
      kind: 'Action',
      content: {
        kind: 'SET_VALUE',
        store: 'P',
        value: 0,
        next: 'yesno_1'
      }
    },
    {
      id: 'yesno_1',
      kind: 'YesNo',
      content: {
        question: 'Will any of the business owners work in the business?',
        fields: [
          { label: 'Yes', next: 'single_2' },
          { label: 'No', next: 'yesno_7' }
        ]
      }
    },
    {
      id: 'single_2',
      kind: 'Single',
      content: {
        question:
          'Is the business a corporation, partnership, limited liability company or sole proprietorship?',
        fields: [
          { label: 'LLC', next: 'yesno_3' },
          { label: 'Corporation', next: 'action_4' },
          { label: 'Partnership', next: 'description_5' },
          { label: 'Sole proprietorship', next: 'description_5' }
        ]
      }
    },
    {
      id: 'yesno_3',
      kind: 'YesNo',
      content: {
        question: 'Has the LLC elected to be taxed as a corporation?',
        fields: [
          { label: 'Yes', next: 'action_4' },
          { label: 'No', next: 'description_6' }
        ]
      }
    },
    {
      id: 'action_4',
      kind: 'Action',
      content: {
        kind: 'SET_VALUE',
        store: 'P',
        value: 1,
        next: 'description_4'
      }
    },
    {
      id: 'description_4',
      kind: 'Description',
      content: {
        question:
          'Owners of a Corporation are Considered Employees if they work for the Corporation',
        fields: [{ kind: 'attach', value: 'NOTE_2' }],
        next: 'yesno_9'
      }
    },
    {
      id: 'description_5',
      kind: 'Description',
      content: {
        question:
          'Sole proprietors and partners in partnerships are not considered employees of the business.',
        fields: [{ kind: 'attach', value: 'NOTE_4' }],
        next: 'yesno_7'
      }
    },
    {
      id: 'description_6',
      kind: 'Description',
      content: {
        question:
          'Members of an LLC are not considered employees of the LLC unless the LLC has elected to be taxed as a corporation.',
        fields: [{ kind: 'attach', value: 'NOTE_5' }],
        next: 'yesno_7'
      }
    },
    {
      id: 'yesno_7',
      kind: 'YesNo',
      content: {
        question:
          'Will the business have any workers, not employed by some other company, that will work regularly for the business?',
        fields: [
          { label: 'Yes', next: 'yesno_10' },
          { label: 'No', next: 'action_8' }
        ]
      }
    },
    {
      id: 'action_8',
      kind: 'Action',
      content: {
        kind: 'IS_VALUE',
        store: 'P',
        value: 0,
        next: ['final_8_1', 'final_8_2']
      }
    },
    {
      id: 'action_14',
      kind: 'Action',
      content: {
        kind: 'IS_VALUE',
        store: 'P',
        value: 0,
        next: ['final_14_1', 'final_14_2']
      }
    },
    {
      id: 'final_8_1',
      kind: 'Final',
      content: {
        title: 'Payroll',
        attach: ['NOTE_10']
      }
    },
    {
      id: 'final_8_2',
      kind: 'Final',
      content: {
        title: 'Payroll',
        attach: ['NOTE_11']
      }
    },
    {
      id: 'final_14_1',
      kind: 'Final',
      content: {
        title: 'Payroll',
        attach: ['NOTE_7']
      }
    },
    {
      id: 'final_14_2',
      kind: 'Final',
      content: {
        title: 'Payroll',
        attach: ['NOTE_9']
      }
    },
    {
      id: 'yesno_9',
      kind: 'YesNo',
      content: {
        question:
          'Do you wish to check the employment status of any non-owner worker?',
        fields: [
          { label: 'Yes', next: 'yesno_7' },
          { label: 'No', next: 'final_end' }
        ]
      }
    },
    {
      id: 'final_end',
      kind: 'Final',
      content: {
        title: 'Payroll',
        message:
          'Thank you for using <strong>Legal Maven</strong>. Please click on <strong>Finish</strong> to exit.'
      }
    },
    {
      id: 'yesno_10',
      kind: 'YesNo',
      content: {
        question:
          'As to any worker regularly performing services for the business (and not employed by some other company), will the business control what work is done and how the work is done?',
        fields: [
          { label: 'Yes', next: 'yesno_11' },
          { label: 'No', next: 'yesno_17' }
        ],
        note: {
          title: 'Reasonable salary',
          attach: ['NOTE_3']
        }
      }
    },
    {
      id: 'yesno_11',
      kind: 'YesNo',
      content: {
        question: 'Is the business licensed as a real estate broker?',
        fields: [
          { label: 'Yes', next: 'yesno_12' },
          { label: 'No', next: 'action_16' }
        ]
      }
    },
    {
      id: 'yesno_12',
      kind: 'YesNo',
      content: {
        question: `Excluding any licensed real estate salespersons who qualify as independent contractors(see below), does the business have any other worker (not employed by another company) who regularly works in the business?
            <small>A licensed real estate salesperson is considered an independent contractor(for payroll tax purposes) if:
              1) his or her compensation is based on sales or other output rather than the number of hours worked and
              2) he or she has a written contract with the broker that states that the salesperson will not be treated as an employee for withholding purposes. (IRC §3508)</small>`,
        fields: [
          { label: 'Yes', next: 'action_16' },
          { label: 'No', next: 'action_14' }
        ]
      }
    },
    // {
    //   id: 'yesno_15',
    //   kind: 'YesNo',
    //   content: {
    //       question:
    //         `Excluding licensed real estate salespersons, are there any workers that will satisfy all of the following three requirements:
    //           <small>1) he or she is not employed by some other company
    //           2) he or she will regularly work for the business and
    //           3) the business will control what work is done by the worker and how the work is done?`,
    //       fields: [
    //         { label: 'Yes', next: 'action_16' },
    //         { label: 'No', next: 'yesno_17' },
    //       ],
    //   }
    // },
    {
      id: 'action_16',
      kind: 'Action',
      content: {
        kind: 'IS_VALUE',
        store: 'P',
        value: 0,
        next: ['final_16_1', 'final_16_2']
      }
    },
    {
      id: 'final_16_1',
      kind: 'Final',
      content: {
        title: 'Payroll',
        attach: ['NOTE_1']
      }
    },
    {
      id: 'final_16_2',
      kind: 'Final',
      content: {
        title: 'Payroll',
        attach: ['NOTE_8']
      }
    },
    {
      id: 'yesno_17',
      kind: 'YesNo',
      content: {
        question: `Does the business have or expect to have any of the following workers:
            <small>
              <ol type='A'>
                <li>A driver who distributes beverages (other than milk) or meat, vegetable, fruit, or bakery products; or who picks up and delivers laundry or dry cleaning, if the driver is an agent of the business or is paid on commission.</li>
                <li>A full-time life insurance sales agent whose principal business activity is selling life insurance or annuity contracts, or both, primarily for one life insurance company.</li>
                <li>An individual who works at home on materials or goods supplied by the business and that must be returned to the business or to a person named by the business, if the business also furnishes specifications for the work to be done.</li>
                <li>A traveling or city salesperson who works for the business full-time and turns in orders to the business from wholesalers, retailers, contractors, or operators of hotels, restaurants, or other similar establishments for goods that are purchased for resale or as supplies for use in the buyer's business operation.</li>
              </ul>
            </small>`,
        fields: [
          { label: 'Yes', next: 'yesno_18' },
          { label: 'No', next: 'action_8' }
        ]
      }
    },
    {
      id: 'yesno_18',
      kind: 'YesNo',
      content: {
        question: `For workers who fall into any of the four previously mentioned categories, do any such workers meet ALL of the following three conditions:
            <small>
              <ol type='1'>
                <li>The service contract states or implies that substantially all the services are to be performed personally by them.</li>
                <li>They don't have a substantial investment in the equipment and property used to perform the services (other than an investment in facilities for transportation, such as a car or truck).</li>
                <li>The services are performed for the business on a continuing basis.</li>
              </ol>
            <s/mall>`,
        fields: [
          { label: 'Yes', next: 'action_20' },
          { label: 'No', next: 'action_8' }
        ]
      }
    },
    {
      id: 'action_20',
      kind: 'Action',
      content: {
        kind: 'IS_VALUE',
        store: 'P',
        value: 0,
        next: ['final_20_1', 'final_20_2']
      }
    },
    {
      id: 'final_20_1',
      kind: 'Final',
      content: {
        title: 'Payroll',
        message:
          'Workers satisfying the conditions described in the previous two questions are considered statutory employees. (IRC §3121(d)(3)) Although federal income tax is not withheld from the wages of statutory employees, social security taxes and medicare taxes are. (IRC §3121(d)(3); Treas. Reg. §31.3121(d)-1(d)) Accodringly, a business with statutory employees must set up payroll.'
      }
    },
    {
      id: 'final_20_2',
      kind: 'Final',
      content: {
        title: 'Payroll',
        message:
          'Workers satisfying the conditions described in the previous two questions are considered statutory employees. (IRC §3121(d) Although federal income tax is not withheld from the wages of statutory employees, social security taxes and medicare taxes are. Accordingly, statutory employees should be included in company payroll. (IRC §3121(d)(3); Treas. Reg. §31.3121(d)-1(d))'
      }
    }
  ]
}
