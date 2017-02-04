var options = {};
options['trial'] =
  {
    code:'trial',
    name:'Trial',
    description:'Hiring a lawyer and disputing your issues in court.',
    cost:232000,
    duration:'around three years',
    lawyers:[
      {
        code:'',
        name:'',
        address:'',
        phone:'',
        pictureURL:''
      }
    ]

  };
options['mediation'] =
  {
    code:'mediation',
    name:'Mediation',
    description:'You and your spouse hire a mediator to help you mutually resolve issues.',
    cost:15000,
    duration:'In general, mediation takes less time than going to trial.'
  };
options['agreement'] =
  {
    code:'agreement',
    name:'Separation agreement',
    description:'You and your spouse hire representatives (usually lawyers) to negotiate issues on your behalf. ',
    cost:4000,
    duration:'In general, mediation takes less time than going to trial.'
  };
options['selfrepresentation'] =
  {
    code:'selfrepresentation',
    name:'Self representation',
    description:'You represent yourself in court.',
    cost:0,
    duration:'In general, self representation takes A LOT of personal and resources.'
  };

module.exports = options;
