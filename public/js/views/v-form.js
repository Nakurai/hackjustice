"use strict;"

function vForm() {}

vForm.prototype = {

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
      return '<div>\
      </div>';
    }


};
