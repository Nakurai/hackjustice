"use strict";
var mongoose = require('mongoose'),
Schema = mongoose.Schema;


class Artwork{

    constructor() {
        this.collectionName = 'artwork';
        this.schema = new Schema({
          code:{type:String, require:true},
          name:{type:String, require:true},
          dimensions:[Number],
          price:{type:Number, default:0},
          layout:{type:String, default:''},
          description:{type:String, default:''},
          dtPainted:{type:Date, default:Date.now()},
          isCommission:{type:Boolean, default:false},
          isSold:{type:Boolean, default:false}
        });

    }

    /**
    @return a mongoose model
    */
    getModel(){
      return mongoose.model(this.collectionName, this.schema);
    }

}

module.exports.artwork = new Artwork();
