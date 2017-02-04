"use strict;"

function vHeader() {}

vHeader.prototype = {

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
      return '<div class="w3-xxlarge w3-center w3-theme">\
        PreRESOLVE\
      </div>\
      <div>\
        <ul class="w3-navbar w3-theme-d4">\
         <li><a href="/home">Home</a></li>\
         <li><a href="/form"> What is your situation? </a></li>\
         <li><a href="/options"> Alternative options </a></li>\
        </ul>\
      </div>\
      </div>';
    }


};
