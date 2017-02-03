"use strict;"

function pForm() {
  // then, loading of the view displayed to the user
  this.view = new vForm();
  this.view.load();

  this.vm = new Vue({
    el:'#content',
    data:{

    }
  });



  this.init();



}

vForm.prototype = {

  /**
  */
  init: function(){
    var that = this;
  }

};
