import model from './model'

export const topics = [
  {
    id: 'start-ups',
    title: 'Start-Ups',
    topics: [
      {
        id: 'incorporate',
        title: 'Should I incorporate?',
      }, {
        id: 'trademark',
        title: 'Can I trademark?',
      }, {
        id: 'payroll',
        title: 'Do I need to set up payroll?',
      }, {
        id: 'workerscomp',
        title: `Do I need workers' compensation insurance?`,
      }
    ]
  }, {
    id: 'real_estate',
    title: 'Real Estate',
    topics: [
      {
        id: 'transfertax',
        title: 'Do I owe transfer tax? (CA only)',
      }, {
        id: 'securitydeposit',
        title: 'Am I entitled to a refund of my security deposit?',
      }
    ]
  }
]

export const forms = [
  {
    id: 'business_corporation',
    title: 'Business Corporation',
    topics: [
      {
        id: 'ca_professional_corporation',
        title: 'CA - Professional Corporation',
      },
      {
        id: 'ca_s_corporation',
        title: 'CA - S-Corporation',
      },
      {
        id: 'de_professional_corporation',
        title: 'DE - Professional Corporation',
      },
      {
        id: 'de_s_corporation',
        title: 'DE - S-Corporation',
      }
    ]
  },
  {
    id: 'grant_deeds',
    title: 'Grant Deeds',
    topics: [
      {
        id: 'ca_grant_deed',
        title: 'CA - Grant Deed',
      }
    ]
  }
]

export const getInformation = (id, categories) => {
  let program = null
  for (let i = 0; i < categories.length; ++i) {
    program = categories[i].topics.find(e => e.id === id)
    if (program) return program
  }
}

export const getDescription = (id) => {
  let program = getInformation(id, topics) || getInformation(id, forms)
  return program.title
  
}

export const getScript = (id) => {
  return model[id]
}
