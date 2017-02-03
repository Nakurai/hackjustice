"use strict;"

function Artwork() {
  var that = this;
  this.localDbName = 'artwork';
  this.store = new Db(this.localDbName);

  this.list = [];

}


Artwork.prototype = {

  /**
   initialize all the local data we will need
   subscribed is the list of wp the user has subscribed to
   */
  init: function(){
    var d = $.Deferred();
    d.resolve();
    return d;
  },

  updateModel: function(){
    var that = this,
    d = $.Deferred();

    api.get('artwork')
    .done(function(artwork){
      that.list = artwork.map(function(curr, ind, array){
        curr.index = ind;
        curr.dimensions = curr.dimensions[0]+' x '+curr.dimensions[1];
        curr.dtPainted = moment(curr.dtPainted).format('YYYY');
        return curr;
      });
      d.resolve();
    })
    .fail(function(err){
      d.reject(err);
    });

    return d;

  }


};
