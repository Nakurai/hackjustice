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
      \
      \
      <ul class="w3-ul">\
      <li v-for="option in options" class="w3-border w3-margin-bottom"> \
        <header> <h3> {{option.name}} </h3> </header>\
        <div class="w3-container">\
          <div class="w3-margin-bottom">\
            <i class="fa fa-hand-o-right w3-margin-right"></i> {{option.description}}\
          </div>\
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
          </div> <!-- end of the two half width icons-->\
          <div class="w3-center">\
            <a v-if="option.code === \'trial\' || option.code === \'agreement\'"  href="/lawyers" class="w3-btn w3-theme"> List of available lawyers </a>\
            <a v-if="option.code === \'mediation\'"  href="/lawyers" class="w3-btn w3-theme"> List of available mediators </a>\
          </div>\
        </div>\
      </li>\
      </ul>\
      </div>';
    }


};
