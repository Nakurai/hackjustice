"use strict;"

function pForm() {
  // then, loading of the view displayed to the user
  this.view = new vForm();
  this.view.load();

  this.vm = new Vue({
    el:'#content',
    data:{
      user:{
        income:0,
        maritalStatus:'',
        issues:[],
        nbChildren:0
      }
    },
    methods:{
      sendUserInformation:function(){
        if(this.user.maritalStatus !== '' && this.user.issues !== []){
          api.post('user/situation', {'user':this.user})
          .done(function(validOptions){
            $('body').trigger('myapp.goto', {destination:'options', param:validOptions})
          })
          .fail(function(err){
            log.err(err);
          });
        }
        else{
          log.err('Sorry, some information are missing')
        }
      }
    }
  });



  this.init();



}

pForm.prototype = {

  /**
  */
  init: function(){
    var that = this;
  }

};
