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
      <form class="w3-container">\
  <fieldset>\
    <legend>Annual Income</legend>\
    <label>Your Annual Income</label>\
    <input class="w3-input" type="text">\

    <label>Spouse Annual Income</label>\
    <input class="w3-input" type="text">\
  </fieldset>\

  <fieldset>\
    <legend>Family</legend>\
    <label>Number of Children</label>\
    <input class="w3-input" type="text">\

    <label>Age of child 1</label>\
    <input class="w3-input" type="text">\
  </fieldset>\

  <fieldset>\
    <legend>Family</legend>\
    <label>Number of Children</label>\
    <input class="w3-input" type="text">\

    <label>Age of child 1</label>\
    <input class="w3-input" type="text">\
  </fieldset>\
</form>\
      </div>';
    }


};
