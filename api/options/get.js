"use strict";

var optionsList = require('../../res/options');

class GetOptions{

    /**
    */
    constructor() {}

    options(code){
      var that = this;

      return new Promise(
      (resolve, reject)=>{
        var res = [];
        if(code){
          res.push(optionsList[code]);
        }
        else{
          res = optionsList;
        }
        resolve(res);
      });

    }






}

module.exports.get = new GetOptions();
