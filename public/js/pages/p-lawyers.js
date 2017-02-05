"use strict;"

/**
Here, optionCodes is an array of all the options that should be displayed.
If the parameter is empty/null, then we assume it's a direct access, so all the options should be displayed.
If not, then we assume the user are coming from the form
*/
function pLawyers(optionCodes) {
  // then, loading of the view displayed to the user
  this.view = new vLawyers();
  this.view.load();

  this.vm = new Vue({
    el:'#content',
    data:{
      lawyers:[{"name":"Angela Princewill",
        "email":"info@y-canada.com",
        "tel":"289-622-7662",
        "address":"1480 Bayly Street, Pickering ON L1W 3T8",
        "website":"www.aprincewill.com",
        "service":"Family Law Consultations : $200"},

        {"name":"Brandon Ament",
        "email":"brandon@amentlegal.com",
        "tel":"416-418-0889",
        "address":"1801 - 1 Yonge Street, Toronto Ontario",
        "website":"www.amentlegal.com",
        "service":"Uncontested Divorce: $1500"},

        {"name":"Jorge A. Cartaya",
        "email":"jorge_c1027@hotmail.com",
        "tel":"647-588-3301",
        "address":"1038 The Queensway Toronto, ON",
        "website":"www.blueletterlaw.com",
        "service":"Simple Divorces: $1600"},

        {"name":"Behrendt Professional Corporation",
        "email":"ca@cohabitationagreement.ca",
        "tel":"(800)407-2570",
        "address":"802-130 Albert Street, Ottawa, Ontario K1P 5G4",
        "website":"www.cohabitationagreement.ca",
        "service":"Cohabitation Agreement"}
]
    },
    created:function(){
      var path = 'options',
      that = this;

    },
    methods:{
    }
  });



  this.init();



}

pLawyers.prototype = {

  /**
  */
  init: function(){
    var that = this;
  }

};
