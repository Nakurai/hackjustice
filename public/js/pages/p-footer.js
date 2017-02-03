"use strict;"

function pFooter() {
  // then, loading of the view displayed to the user
  // this.view = new vFooter();
  //this.view.load();

  this.vm = new Vue({
    el:'#footer',
    data:{

    }
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
