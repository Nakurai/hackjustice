"use strict;"
var log = new Mylog();


function vHome() {}

  vHome.prototype = {

    /**
      change the HTML elements of the page
    */
    load: function(){
      $('#content').html(this.content());
    },


    /**
      returns the html content of the page itself
    */
    content: function(){
      return '<div class="w3-content w3-display-container">\
                <p>\
                  Welcome to ..............\
                  This tool is conceived to help you in your divorce process.\
                </p>\
                <p>\
                  <span class="w3-btn"> BEGIN </span>\
                </p>\
              </div>\
              ';
    }



};
