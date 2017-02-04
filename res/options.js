var options = {};
options['trial'] =
  {
    code:'trial',
    name:'Trial',
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
    cost:15000,
    duration:'In general, mediation takes less time than going to trial.'
  };
options['agreement'] =
  {
    code:'agreement',
    name:'Separation agreement',
    cost:4000,
    duration:'In general, mediation takes less time than going to trial.'
  };
options['selfrepresentation'] =
  {
    code:'selfrepresentation',
    name:'Self representation',
    cost:0,
    duration:'In general, self representation takes A LOT of personal and resources.'
  };

module.exports = options;
