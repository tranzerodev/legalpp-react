export default {
  name: 'workerscomp',
  description: "Do I need workers' compensation insurance?",
  start: 'description_1',
  kind: 'Topic',
  attach: {
    EXP_1:
      'The State of California requires employers to carry workers’ compensation insurance for their employees who are hired in California or regularly work in California, subject to certain exceptions. (Cal. Labor Code §3700 and §3600.5) If required, the employer must obtain workers’ compensation insurance from either a licensed insurance company or through the State Compensation Insurance Fund; it also has the option to self-insure for workers’ compensation. For information about how these California requirements apply to a particular worker, select the applicable response in answer to the following questions. You can always click on the back button to change your answer or explore the legal consequences of different selections. Click on <strong>OK</strong> to proceed.',
    EXP_2: `Sole proprietors are not required to obtain workers’ compensation insurance for themselves. However they have the option to purchase such insurance to cover themselves. For some frequently asked questions about workers’ compensation for employers, click <a href='https://www.dir.ca.gov/dwc/faqs.html' target='_blank'>here<a/>.`,
    EXP_3:
      'If the owner-worker is a general partner of a partnership or managing member of an LLC, the business is not required to carry workers’ compensation insurance for such worker so long as he or she signs a written waiver of all rights to workers’ compensation benefits. (Cal. Labor Code §3352(a)(17)) This waiver will be effective upon the date of receipt and acceptance by the insurance carrier and will remain effective until the insurance carrier (if any) is provided with a written withdrawal of the waiver. (Id.)',
    EXP_4: `A professional corporation is not required to carry workers’ compensation insurance for its sole owner or for any owner who is a practitioner performing professional services under the corporation's license who executes a waiver of all rights to workers’ compensation benefits. (Cal. Labor Code 3352(a)(18)) This waiver will be effective upon the date of receipt and acceptance by the insurance carrier and will remain effective until the corporation provides its insurance carrier (if any) with a written withdrawal of the waiver. (Id.)`,
    EXP_5:
      'A corporation is not required to carry workers’ compensation insurance for an officer or director who owns at least 10% of the stock of the corporation and signs a waiver. (Cal. Labor Code §3352(a)(16)) This waiver will be effective upon the date of receipt and acceptance by the insurance carrier and will remain effective until the corporation provides its insurance carrier (if any) with a written withdrawal of the waiver. (Id.)',
    EXP_6: `<strong>’Employee’</strong> means every person in the service of an employer under any appointment or contract of hire or apprenticeship, express or implied, oral or written, whether lawfully or unlawfully employed….” (Cal. Labor Code §3351) The determination of whether an individual is an independent contractor or an employee depends on a number of factors, all of which must be considered and none of which is controlling by itself. The most significant factor is whether the employer has the right to control the worker both as to the work to be done and the manner and means in which it is performed. For a list of the other factors click <a href="#exp_6_1">here</a>.<description id="exp_6_1">{{EXP_6_1}}<a href="#">Close</a></description> Even in the absence of control over work details, an employer-employee relationship will be found if: 1) the principal retains pervasive control over the operation, 2) the worker’s duties are an integral part of the operation, and 3) the nature of the work makes detailed control unnecessary. For more information on this subject, please visit the <a href='http://www.dir.ca.gov/dlse/FAQ_IndependentContractor.htm' target='_blank'>DSLE website.</a>`,
    EXP_6_1: `Other factors that may be considered depending on the situation include:
    <ul>
      <li>Whether the person performing is engaged in an occupation or business distinct from that of the principal;</li>
      <li>Whether or not the work is part of the regular business of the principal or alleged employer;</li>
      <li>Whether the principal or the worker supplies the instrumentalities, tools, and the place for the person doing the work;</li>
      <li>The alleged employee’s investment in the equipment or materials required by his or task or his employment of helpers;</li>
      <li>Whether the service rendered requires a special skill;</li>
      <li>The kind of occupation, with reference to whether, in the locality, the work is usually done under the direction of the principal or by a specialist without supervision;</li>
      <li>The alleged employee’s opportunity for profit or loss depending on his or her managerial skill;</li>
      <li>The length of time for which the services are to be performed;</li>
      <li>The degree of permanence of the working relationship</li>
      <li>The method of payment, whether by time or by the job; and</li>
      <li>Whether or not the parties believe they are creating an employer-employee relationship may have some bearing on the question, but is not determinative since this is a question of law based on the objective tests</li>
    </ul>`,
    EXP_7:
      'A business must carry workers’ compensation insurance if it holds an active Roofing (C-39) classification even if it has no employees. (Cal. Bus. & Prof. Code §7125(a) and §7125(b)(2)) In addition, contractors whose licenses are qualified by a Responsible Managing Employee (RME) must obtain workers’ compensation insurance because the RME is considered an employee as a matter of law. (Bus & Prof Code §7068(c))',
    EXP_8:
      'An unlicensed worker performing services for which a license is required is a statutory employee entitled to workers’ compensation insurance coverage. (See Cal. Labor Code, §2750.5)',
    EXP_9: `<ol><li>A person who is employed by his or her parent, spouse, or child as a nanny or housekeeper.</li>
    <li>A person performing services in return for aid or sustenance only, received from any religious, charitable, or relief organization.</li>
    <li>A person performing voluntary services at or for a recreational camp, hut, or lodge operated by a tax-exempt nonprofit organization of which he or she or a member of his or her family is a member and who does not receive compensation for those services, other than meals, lodging, or transportation.</li>
    <li>A person performing voluntary service as a ski patrolman who does not receive compensation for those services, other than meals or lodging or the use of ski lifts.</li>
    <li>A person employed by a ski lift operator to work at a snow ski area who is relieved of, and is not performing any, prescribed duties, while participating in recreational activities on his or her own initiative.</li>
    <li>A person, other than a regular employee, participating in sports or athletics who does not receive compensation for the participation other than the use of athletic equipment, uniforms, transportation, travel, meals, lodgings, or other expenses incidental thereto.</li>
    <li>A person working as a nanny or housekeeper where the employment was, or was contracted to be, for less than 52 hours or was, or was contracted to be, for wages of not more than $100.</li>
    <li>A person performing voluntary service for a private, nonprofit organization who does not receive remuneration for the services, other than meals, transportation, lodging, or reimbursement for incidental expenses.</li>
    <li>A person, other than a regular employee, performing officiating services relating to amateur sporting events sponsored by a public agency or private, nonprofit organization, who does not receive remuneration for these services, other than a stipend for each day of service no greater than the amount established by the Department of Human Resources as a per diem expense for employees or officers of the state.  </li>
    <li>A student participating as an athlete in amateur sporting events sponsored by a public agency or public or private nonprofit college, university, or school, who does not receive remuneration for the participation, other than the use of athletic equipment, uniforms, transportation, travel, meals, lodgings, scholarships, grants-in-aid, or other expenses incidental thereto.</li>
    <li>A person, other than a regular employee, performing services as a sports official for an entity sponsoring an intercollegiate or interscholastic sports event, or any person performing services as a sports official for a public agency, public entity, or a private nonprofit organization, which public agency, public entity, or private nonprofit organization sponsors an amateur sports event.  For purposes of this subdivision, “sports official” includes an umpire, referee, judge, scorekeeper, timekeeper, or other person who is a neutral participant in a sports event.</li>
    <li>A person who is an owner-builder who is participating in a mutual self-help housing program (as defined in Section 50087 of the Health and Safety Code) sponsored by a nonprofit corporation.</li></ol>`,
    EXP_10:
      'If the worker is an employee that is hired in California or regularly works in California and is not exempt, then the employer is required to maintain workers’ compensation insurance for the employee from either a licensed insurance company or through the State Compensation Insurance Fund. (Cal. Labor Code, §3700 and §3600.5) The employer also has the option to self-insure for workers’ compensation benefits. (Cal. Labor Code, §3700(b))',
    EXP_11: `A business without California employees is not required to carry workers’ compensation insurance so long as it does not hold an active California roofing license or have a Responsible Managing Employee for its California contractor’s license or employ any “statutory employees”. The following are considered statutory employees for whom the employer must maintain workers’ compensation insurance:
    <ul>
    <li>Any author or artist while engaged by contract with the employer for the creation of a specially ordered or commissioned work of authorship in which the author or artist and the employer expressly agree in a written agreement signed by them that the work shall be considered a work made for hire (as defined in Section 101 of Title 17 of the United States Code), and the employer obtains ownership of all the rights comprised in the copyright in the work. (See Cal. Labor Code, §3351.5(c))</li>
    <li>Any person not holding a valid contractor’s license but performing services requiring a contractor’s license. (See Cal. Labor Code, §2750.5)</li>
    </ul>
    Please also note that workers whose employment training is arranged by the State Department of Rehabilitation and nannies and home caregivers whose services are paid for by the state or county may also be considered employees for workers’ compensation purposes, but in such cases the workers’ compensation insurance premium is paid by the applicable government agency. (See Cal. Labor Code, §3351.5(a) and (b))`
  },
  nodes: [
    {
      id: 'description_1',
      kind: 'Description',
      content: {
        fields: [{ kind: 'attach', value: 'EXP_1' }],
        next: 'yesno_2'
      }
    },
    {
      id: 'yesno_2',
      kind: 'YesNo',
      content: {
        question: 'Is the worker an owner of the business?',
        fields: [
          { label: 'Yes', next: 'single_4' },
          { label: 'No', next: 'yesno_11' }
        ]
      }
    },
    {
      id: 'single_4',
      kind: 'Single',
      content: {
        question: 'What is the legal structure of the business?',
        fields: [
          { label: 'Sole Proprietorship', next: 'final_3' },
          { label: 'Partnership or LLC', next: 'yesno_5' },
          { label: 'Corporation', next: 'yesno_7' }
        ]
      }
    },
    {
      id: 'final_3',
      kind: 'Final',
      content: {
        title: "Do I need workers' compensation insurance?",
        attach: ['EXP_2']
      }
    },
    {
      id: 'yesno_5',
      kind: 'YesNo',
      content: {
        question:
          'Is the worker the general partner of a partnership or managing member of an LLC?',
        fields: [
          { label: 'Yes', next: 'final_6' },
          { label: 'No', next: 'yesno_11' }
        ]
      }
    },
    {
      id: 'final_6',
      kind: 'Final',
      content: {
        title: "Do I need workers' compensation insurance?",
        attach: ['EXP_3']
      }
    },
    {
      id: 'yesno_7',
      kind: 'YesNo',
      content: {
        question: 'Is the corporation a professional corporation?',
        fields: [
          { label: 'Yes', next: 'final_9' },
          { label: 'No', next: 'yesno_8' }
        ]
      }
    },
    {
      id: 'yesno_8',
      kind: 'YesNo',
      content: {
        question:
          'Is the worker an officer or director who owns at least 10% of the stock of the corporation?',
        fields: [
          { label: 'Yes', next: 'final_10' },
          { label: 'No', next: 'yesno_11' }
        ]
      }
    },
    {
      id: 'final_9',
      kind: 'Final',
      content: {
        title: "Do I need workers' compensation insurance?",
        attach: ['EXP_4']
      }
    },
    {
      id: 'final_10',
      kind: 'Final',
      content: {
        title: "Do I need workers' compensation insurance?",
        attach: ['EXP_5']
      }
    },
    {
      id: 'yesno_11',
      kind: 'YesNo',
      content: {
        question:
          'Is the worker an employee who regularly works in California or who was hired in California?',
        fields: [
          { label: 'Yes', next: 'single_12' },
          { label: 'No', next: 'yesno_15' }
        ],
        note: {
          title: 'Employee',
          attach: ['EXP_6']
        }
      }
    },
    {
      id: 'single_12',
      kind: 'Single',
      content: {
        question:
          'Does the worker fall under one of the exceptions listed below:',
        fields: [
          {
            kind: 'choice',
            label:
              'A person who is employed by his or her parent, spouse, or child as a nanny or housekeeper.'
          },
          {
            kind: 'choice',
            label:
              'A person performing services in return for aid or sustenance only, received from any religious, charitable, or relief organization.'
          },
          {
            kind: 'choice',
            label:
              'A person performing voluntary services at or for a recreational camp, hut, or lodge operated by a tax-exempt nonprofit organization of which he or she or a member of his or her family is a member and who does not receive compensation for those services, other than meals, lodging, or transportation.'
          },
          {
            kind: 'choice',
            label:
              'A person performing voluntary service as a ski patrolman who does not receive compensation for those services, other than meals or lodging or the use of ski lifts.'
          },
          {
            kind: 'choice',
            label:
              'A person employed by a ski lift operator to work at a snow ski area who is relieved of, and is not performing any, prescribed duties, while participating in recreational activities on his or her own initiative.'
          },
          {
            kind: 'choice',
            label:
              'A person, other than a regular employee, participating in sports or athletics who does not receive compensation for the participation other than the use of athletic equipment, uniforms, transportation, travel, meals, lodgings, or other expenses incidental thereto.'
          },
          {
            kind: 'choice',
            label:
              'A person working as a nanny or housekeeper where the employment was, or was contracted to be, for less than 52 hours or was, or was contracted to be, for wages of not more than $100.'
          },
          {
            kind: 'choice',
            label:
              'A person performing voluntary service for a private, nonprofit organization who does not receive remuneration for the services, other than meals, transportation, lodging, or reimbursement for incidental expenses.'
          },
          {
            kind: 'choice',
            label:
              'A person, other than a regular employee, performing officiating services relating to amateur sporting events sponsored by a public agency or private, nonprofit organization, who does not receive remuneration for these services, other than a stipend for each day of service no greater than the amount established by the Department of Human Resources as a per diem expense for employees or officers of the state.'
          },
          {
            kind: 'choice',
            label:
              'A student participating as an athlete in amateur sporting events sponsored by a public agency or public or private nonprofit college, university, or school, who does not receive remuneration for the participation, other than the use of athletic equipment, uniforms, transportation, travel, meals, lodgings, scholarships, grants-in-aid, or other expenses incidental thereto.'
          },
          {
            kind: 'choice',
            label:
              'A person, other than a regular employee, performing services as a sports official for an entity sponsoring an intercollegiate or interscholastic sports event, or any person performing services as a sports official for a public agency, public entity, or a private nonprofit organization, which public agency, public entity, or private nonprofit organization sponsors an amateur sports event.  For purposes of this subdivision, “sports official” includes an umpire, referee, judge, scorekeeper, timekeeper, or other person who is a neutral participant in a sports event.'
          },
          {
            kind: 'choice',
            label:
              'A person who is an owner-builder who is participating in a mutual self-help housing program (as defined in Section 50087 of the Health and Safety Code) sponsored by a nonprofit corporation.'
          },
          {
            kind: 'choice',
            label: "No, the worker doesn't.",
            next: 'final_14'
          }
        ],
        store: 'exemption',
        next: 'final_13'
      }
    },
    {
      id: 'final_13',
      kind: 'Final',
      content: {
        title: "Do I need workers' compensation insurance?",
        message:
          // eslint-disable-next-line
          "A business is not required by the State of California to carry workers' compensation insurance for a worker falling within the following exemption: <p><strong>${exemption}</strong></p>",
      }
    },
    {
      id: 'final_14',
      kind: 'Final',
      content: {
        title: "Do I need workers' compensation insurance?",
        attach: ['EXP_10']
      }
    },
    {
      id: 'yesno_15',
      kind: 'YesNo',
      content: {
        question:
          "Does the business hold an active Roofing (C-39) classification or is its contractor's license qualified by a Responsible Managing Employee?",
        fields: [
          { label: 'Yes', next: 'final_16' },
          { label: 'No', next: 'yesno_17' }
        ]
      }
    },
    {
      id: 'final_16',
      kind: 'Final',
      content: {
        title: "Do I need workers' compensation insurance?",
        attach: ['EXP_7']
      }
    },
    {
      id: 'yesno_17',
      kind: 'YesNo',
      content: {
        question: 'Is the worker an unlicensed contractor?',
        fields: [
          { label: 'Yes', next: 'final_18' },
          { label: 'No', next: 'final_19' }
        ]
      }
    },
    {
      id: 'final_18',
      kind: 'Final',
      content: {
        title: "Do I need workers' compensation insurance?",
        attach: ['EXP_8']
      }
    },
    {
      id: 'final_19',
      kind: 'Final',
      content: {
        title: "Do I need workers' compensation insurance?",
        attach: ['EXP_11']
      }
    }
  ]
}
