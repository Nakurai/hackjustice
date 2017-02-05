"use strict;"

function vLawyers() {}

vLawyers.prototype = {

    /**
      change the HTML elements of the page
    */
    load: function(){
      $('#content').html(this.html());
    },

    /**
      returns the html content of the page itself
    */
    html: function(){
      return '<div class="w3-center" style="width:60%;margin:auto;">\
              <div v-for="lawyer in lawyers" class="w3-card-4 w3-margin-bottom">\
                <header class="w3-container w3-light-grey">\
                <h3>{{lawyer.name}}</h3>\
                </header>\
                <div class="w3-container">\
                <i class="fa fa-map-marker w3-margin-right"></i> {{lawyer.address}} <br>\
                <i class="fa fa-phone w3-margin-right"></i> {{lawyer.tel}} <br>\
                <i class="fa fa-envelope w3-margin-right"></i>{{lawyer.email}} <br>\
                </div>\
              </div>\
      </div>';
    }


};
