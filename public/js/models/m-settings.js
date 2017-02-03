"use strict;"

function Settings() {
  var that = this;
  this.localDbName = 'settings';
  //this.store = store.namespace(this.localDbName);
  this.store = new Db(this.localDbName);

}


Settings.prototype = {
  /**
   initialize all the local data we will need
   if no settings are found or something went wrong, then settings are initialized. in al resolving cases, we send back the current settings
   @return a promise
   */
  init: function(){
    var d = $.Deferred(),
    that = this;

    this.store.get({'_id':'settings'})
    .done(function(settings){
      d.resolve(settings);
    })
    .fail(function(err){
      // if no settings exist yet
      if(err.status === 404){
        var initSettings = {'_id':'settings', 'status':'init', 'currentPage':'home', 'previousPage':'home'};
        that.store.set(initSettings)
        .done(function(){
          d.resolve(initSettings);
        })
        .fail(function(err){
          d.reject(err);
        });
      }
      else{
        apptools.log.err(err);
      }

    });

    return d;
  },

  /**
  save the route of the application
  @param curr is a string containing the current page of the app
  @param prev is a string containing the previous page the user was on
  @return nothing
  */
  changePage: function(currentPage, previousPage){
    var that = this;

    this.store.get({'_id':'settings'})
    .done(function(settings){
      settings.currentPage = currentPage;
      settings.previousPage = previousPage;

      that.store.set(settings)
      .done(function(){
      })
      .fail(function(err){
        apptools.log.err(err);
      });
    })
    .fail(function(err){
      apptools.log.err(err);
    });
  }


};
