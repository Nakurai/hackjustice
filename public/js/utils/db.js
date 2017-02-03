"use strict;"

/**
 * This class handles all the local storage thing. To prevent data snooping, we limit the storage to the live session
 * If no local strage is supported, then we'll use an in memory structure
 * @todo check if the in-memory case affects performance
 */
function Db(namespace){
    this.namespace = 'hackjustice.'+namespace;
    this.db = new PouchDB(this.namespace, {auto_compaction: true});
}

Db.prototype = {

  /**
  Insert/update a value in the database
  @param a javascript object containing at least an _id attribute
  @return a promise
  */
  set: function(val){
    var that = this;
    var d = $.Deferred();

    try {
      this.get(val)
      .done(
        function(doc){
          val._rev = doc._rev;
      })
      .always(function(){

        that.db.put(val)
        .then(function(response) {
          d.resolve(response);
        })
        .catch(function (err) {
          d.reject(err);
        });

      });
    } catch (e) {
      d.reject(e);
    };

    return d;
  },

  /**
  Return documents from the local database. If not parameter is specified, then all docs are returned.
  @param a javascript objet containing at least an _id attribute, or null
  @return a promise
  */
  get: function(val){
    var d = $.Deferred();

    if(!val._id){
      d.reject('no id found');
    }
    else{
      this.db.get(val._id)
      .then(
        function(doc) {
          d.resolve(doc)
      })
      .catch(
        function (err) {
          d.reject(err);
      });
    }

    return d;
  },


  /**
  Return documents from the local database. If not parameter is specified, then all docs are returned.
  @param a javascript objet containing the options
  @return a promise
  */
  getAll: function(options){
    options = options || {include_docs:true};
    var d = $.Deferred();

    this.db.allDocs(options)
    .then(function (result) {
      var docs = result.rows.map(function(curr, index, table){return curr.doc;});
      d.resolve(docs);
    })
    .catch(function (err) {
      d.reject(err);
    });

    return d;
  },

  remove: function(val){
    var d = $.Deferred(),
    that = this;

    this.get(val)
    .done(function(doc) {
      that.db.remove(doc)
      .then(function (result) {
        d.resolve();
      })
      .catch(function (err) {
        d.reject(err);
      });
    })
    .fail(function(err){
      d.reject(err);
    });

    return d;
  },

  removeAll: function(){
    var d = $.Deferred(),
    that = this;

    this.db.allDocs().then(function (result) {
      // Promise isn't supported by all browsers; you may want to use bluebird
      return Promise.all(result.rows.map(function (row) {
        return that.db.remove(row.id, row.value.rev);
      }));
    }).then(function () {
      d.resolve();
    }).catch(function (err) {
      d.reject(err);
    });

    return d;
  },


  /**
    completely erase the database
  */
  destroy: function(){
    var d = $.Deferred(),
    that = this;

    this.db.destroy()
    .then(function (res) {
      d.resolve(res);
    }).catch(function (err) {
      d.reject(err);
    });

    return d;
  }

}
