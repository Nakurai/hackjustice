"use strict;"
var log = new Mylog();


function vHome() {}

  vHome.prototype = {

    /**
      change the HTML elements of the page
    */
    load: function(){
      //$('header').html(this.header());
      $('#content').html(this.content());
      //$('footer').html(this.footer());
    },

    /**
      returns the html content of the header
    */
    header: function(){
      return '';
    },

    /**
      returns the html content of the page itself
    */
    content: function(){
      return '<div class="w3-content w3-display-container">\
                <span id="slideLeft" class="w3-btn-floating w3-display-left w3-theme w3-hover-theme-reverse"> &#10094;  </span>\
                <span id="slideRight" class="w3-btn-floating w3-display-right w3-theme w3-hover-theme-reverse"> &#10095; </span>\
                <div class="slide  w3-display-container">\
                  <img src="/img/slideshow_work_in_progress.png" alt="Work in progress" style="width:100%" class="w3-opacity-max">\
                  <div class="w3-display-middle w3-container w3-xxlarge w3-text-white"> WORK IN PROGRESS </div>\
                </div>\
                <div class="slide w3-hide w3-display-container">\
                  <img src="/img/slideshow_events.png" alt="Events" style="width:100%" class="w3-opacity">\
                  <div class="w3-display-middle w3-container w3-xxlarge w3-text-white"> EVENTS </div>\
                </div>\
                <div class="slide w3-hide w3-display-container">\
                  <img src="/img/slideshow_bio.png" alt="Bio" style="width:100%" class="w3-opacity">\
                  <div class="w3-display-middle w3-container w3-xxlarge w3-text-white "> BIO </div>\
                </div>\
              </div>\
              <div>\
              </div>\
              ';
    },


    /**
      returns the html content of the footer
    */
    footer: function(){
      return '<p>  </p>';
    }


};
