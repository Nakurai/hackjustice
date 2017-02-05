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
        <img src="/img/logo.png" alt="logo" style="width:50px; height:50px;" class="w3-margin-left">\
      </div>\
      <div>\
        <ul class="w3-navbar w3-theme-d4">\
         <li><a href="/home">Home</a></li>\
         <li><a href="/form"> What is your situation? </a></li>\
         <li><a href="/options"> Alternative options </a></li>\
         <li><a href="/lawyers"> Lawyers and Mediators</a></li>\
        </ul>\
      </div>\
      </div>';
    }


};
