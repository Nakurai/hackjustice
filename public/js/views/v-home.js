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
                <div class="w3-center">\
                  <p class="w3-container w3-border w3-padding w3-round">\
                    ioerjgoerj rpgojeùkgp elgj epglg pegrepgkĝ p jepùgojekgrrj eùg e\
                  </p>\
                  <p class="w3-center">\
                    <a class="w3-btn w3-theme" href="/form"> BEGIN </a>\
                  </p>\
                </div>\
                  \
                  \
                <div id="alertAbuseModal" v-if="showAlertAbuse" class="w3-modal">\
                  <div class="w3-modal-content" >\
                    <div class="w3-container w3-center w3-border w3-round">\
                      <p class="w3-xlarge">\
                        <i class="fa fa-exclamation-triangle w3-text-red"></i> Could you be harmed?\
                      </p>\
                      <p>\
                        Before continuing with any dispute you should ensure that you are informed and know where to get help if something bad happens. <br>\
                      </p>\
                      <p>\
                        <span class="w3-btn w3-green" v-on:click="showAlertAbuse=false"> Enter </span>\
                        <a href="#" target="_blank" class="w3-btn w3-red"> I want more information </a>\
                      </p>\
                    </div>\
                  </div>\
                </div>\
              </div>\
              ';
    }



};
