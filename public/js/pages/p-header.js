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

    user.isLoggedIn()
    .done(function(isLoggedIn){
      if(isLoggedIn)
        that.header.userLoggedIn = true;
    })
    .fail(function(err){
      log.err(err);
    });

    $('body').on('myapp.userLoggedIn', function(event, param){
      that.header.userLoggedIn = true;
    });
    $('body').on('myapp.userLoggedOut', function(event, param){
      that.header.userLoggedIn = false;
    });

  }
};
