"use strict";
var mongoose = require('mongoose'),
Schema = mongoose.Schema,
bcrypt = require('bcryptjs');


class User{

    constructor() {
        this.collectionName = 'user';
        this.schema = new Schema({
          code:{type:String, require:true},
          login:{type:String, require:true},
          password:{type:String, require:true},
          token:String,
          tokenKey:String,
          email:{type:String, require:true},
          username:{type:String, require:true}
        });

    }

    /**
    @return a mongoose model
    */
    getModel(){
      return mongoose.model(this.collectionName, this.schema);
    }

}

module.exports.user = new User();
