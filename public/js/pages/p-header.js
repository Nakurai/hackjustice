"use strict;"

function pHeader() {

  this.view = new vHeader();
  this.view.load();

  this.header = new Vue({
    el:'#header',
    data:{
      nbItems:0,
      userLoggedIn:false
    },
    methods:{
      goto:function(destination){$('body').trigger('myapp.goto', {'destination':destination});}
    }
  });

  this.init();

}

pHeader.prototype = {

  /**
  */
  init: function(){
    var that = this;

  }
};
