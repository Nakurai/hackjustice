"use strict;"

function Cart() {
  var that = this;
  this.localDbName = 'cart';
  //this.store = store.namespace(this.localDbName);
  this.store = new Db(this.localDbName);

  this.orders = [];
}

/**
this function takes an order as a parameter. An order can have several sizes for the same painting.
for each size, an input in the database is set
@param an object {{paint}, type, [sizes]}
@return a promise
@todo check the cart at the start of the website to update the number of items
*/
Cart.prototype = {

  addOrder: function(order){
    var d = $.Deferred(),
    that = this,
    nbSizes = order.sizes.length,
    docs = [];

    if(order.type === 'original'){
      docs.push({
        '_id':order.paint.code+order.type,
        'paintCode':order.paint.code,
        'paintName':order.paint.name,
        'paintDimensions':order.paint.dimensions,
        'type':order.type,
        'size':order.paint.dimensions,
        'eachPrice':order.paint.price,
        'qty':1
      });
    }
    else{
      for(i=0; i<nbSizes; i++){
        var price = order.sizes[i].printPrice;
        if(order.framed === 'yes'){
          price = order.sizes[i].fprintPrice;
        }
        docs.push({
          '_id':order.paint.code+order.type+order.sizes[i].code,
          'paintCode':order.paint.code,
          'paintName':order.paint.name,
          'paintDimensions':order.paint.dimensions,
          'type':order.type,
          'framed':order.framed,
          'size':order.sizes[i].code,
          'eachPrice':price,
          'qty':1
        });
      }
    }

    //console.log(JSON.stringify(docs, null, 2));

    this.store.db.bulkDocs(docs)
    .then(function(res){
      $('body').trigger('artbyacudj.cart-changed');
      d.resolve();
    })
    .catch(function(err){
      d.reject(err);
    });

    return d;
  },


  countItems: function(){
    var d = $.Deferred(),
    that = this;
    this.store.getAll()
    .done(function(res){
      d.resolve(res.length);
    })
    .fail(function(err){
      d.reject(err);
    });
    return d;

  },

  updateModel: function(){
    var d = $.Deferred(),
    that = this;

    this.store.getAll()
    .done(function(items){
      try {
        /*
        items = items.map(function(curr, ind){
          curr.index = ind;
          return curr;
        });
        */
        that.orders = items;
        d.resolve();
      } catch (e) {
        console.log(e.message);
      }
    })
    .fail(function(err){
      d.reject(err);
    });

    return d;

  },

  /**
  empty the user's cart
  @return a promise
  */
  removeAll: function(){
    this.orders = [];
    $('body').trigger('artbyacudj.cart-changed');
    return this.store.removeAll();
  },

  /**
  ifthe user changed their mind, they can delete an item from their cart. First the in memory list is updated, then the local database
  @param an object with at least the id of the item to delete
  @return a promise
  */
  remove: function(item){
    for(cpt=0, nbItems=this.orders.length; cpt<nbItems; cpt++){
      if(this.orders[cpt]._id === item._id){
        this.orders.splice(cpt, 1);
        cpt=nbItems;
        $('body').trigger('artbyacudj.cart-changed');
      }
    }
    return this.store.remove(item);
  },

  /**
  update a specific item
  @param the full item object
  @return a promise
  */
  set: function(item){
    return this.store.set(item);
  }

};
