"use strict";
var mongoose = require('mongoose'),
Schema = mongoose.Schema;


class Order{

    constructor() {
        this.collectionName = 'order';
        this.schema = new Schema({
          code:{type:String, require:true},
          username:{type:String, require:true},
          items:{type:[], require:true},
          prices:{
            art:{type:Number, require:true},
            shipping:{type:Number, require:true},
            total:{type:Number, require:true}
          }
          address:{
            street_number:String,
            route:String,
            locality:String,
            postal_code:String,
            formatted:String,
            location:{
              lat:Number,
              lng:Number
            },
            utc_offset:Number
          },
          dtCreated:{type:Date, default:Date.now()},
        });

    }

    /**
    @return a mongoose model
    */
    getModel(){
      return mongoose.model(this.collectionName, this.schema);
    }

}

module.exports.order = new Order();
