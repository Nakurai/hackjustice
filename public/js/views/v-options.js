"use strict;"

function vOptions() {}

vOptions.prototype = {

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
      <div v-if="generalContent"> \
        Going to trial is not the only possible way to resolve a separation. The list below shows you the alternatives.\
      </div> \
      <div v-if="!generalContent"> \
        Given your answers, you will find below the possible options for handling your separation.\
      </div> \
      <div v-for="option in options" class="w3-card-2"> \
        <header> <h3> {{option.name}} </h3> </header>\
        <div class="w3-container">\
        <div class="w3-row">\
          <div class="w3-col w3-half">\
           <p title="estimated cost"> <i class="fa fa-money w3-xlarge w3-margin-bottom w3-text-green" aria-hidden="true"> </i><br>\
           {{option.cost}} CAD\
           </p>\
          </div>\
          <div class="w3-col w3-half">\
          <p title="estimated duration"> <i class="fa fa-calendar w3-large w3-margin-bottom" aria-hidden="true"> </i><br>\
            {{option.duration}}\
          </p>\
          </div>\
        </div>\
        </div>\
      </div>\
      </div>';
    }


};
