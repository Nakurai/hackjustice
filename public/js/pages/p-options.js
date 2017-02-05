"use strict;"

/**
Here, optionCodes is an array of all the options that should be displayed.
If the parameter is empty/null, then we assume it's a direct access, so all the options should be displayed.
If not, then we assume the user are coming from the form
*/
function pOptions(optionCodes) {
  // then, loading of the view displayed to the user
  this.view = new vOptions();
  this.view.load();

  this.vm = new Vue({
    el:'#content',
    data:{
      generalContent:true,
      options:[]
    },
    created:function(){
      var path = 'options',
      that = this;
      if(optionCodes.length > 0){
        this.generalContent = false;
        optionCodes.forEach((curr)=>{
          api.get(path+'/'+curr)
          .done(function(options){
            if(options.length>0){
              that.options.push(options[0]);
            }
          })
          .fail(function(err){
            log.err(err)
          });
        });
      }
      else{
        api.get(path)
        .done(function(options){
          that.options = options;
        })
        .fail(function(err){
          log.err(err)
        });
      }
    },
    methods:{
    }
  });



  this.init();



}

pOptions.prototype = {

  /**
  */
  init: function(){
    var that = this;
  }

};
