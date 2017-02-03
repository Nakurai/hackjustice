"use strict;"

function pFooter() {
  // then, loading of the view displayed to the user
  // this.view = new vFooter();
  //this.view.load();

  var footer = new Vue({
    el:'#footer',
    template:'<div class="w3-center" style="border-top: 1px solid #3e3ec1">\
            <p>\
            website by <a href="mailto:whatisyourmission@creatite.online" title="technical dreamer">creatite</a>, 2017\
            </p>\
          </div>\
          '
  });

  this.init();

}

pFooter.prototype = {

  /**
  */
  init: function(){
    var that = this;
  }

};
