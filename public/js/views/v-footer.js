"use strict;"

function vFooter() {}

vFooter.prototype = {

    /**
      change the HTML elements of the page
    */
    load: function(){
      $('#header').html(this.html());
    },

    /**
      returns the html content of the page itself
    */
    html: function(){
      return '<div class="w3-center" style="border-top: 1px solid #3e3ec1">\
              <p>\
                an awesome project\
              </p>\
            </div>';
    }


};
