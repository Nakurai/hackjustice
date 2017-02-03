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
      return '<div >\
        <ul class="w3-navbar w3-border w3-large w3-theme">\
          <li v-on:click="goto(\'artwork\')"> <a href="#">Oeuvres </a></li>\
          <li v-show="userLoggedIn" class="w3-dropdown-hover">\
            <a href="#">  <i class="fa fa-user"> </i> Mon compte </a>\
            <div class="w3-dropdown-content">\
              <a href="#">Profil</a>\
              <a href="#">Mes oeuvres</a>\
              <a href="#">Se déconnecter</a>\
            </div> \
          </li> \
          <li v-show="!userLoggedIn" v-on:click="goto(\'signup\')"> <a href="#">Créer un compte </a>\
          <li v-show="!userLoggedIn" v-on:click="goto(\'login\')"><a href="#"><i class="fa fa-sign-in"> </i> Se connecter</a></li>\
          <li v-on:click="goto(\'profile\')"><a href="#"><i class="fa fa-shopping-cart"> </i> <span id="nbItems" class="w3-badge w3-small w3-orange">{{nbItems}}</span> </a></li>\
        </ul>\
      </div>';
    }


};
