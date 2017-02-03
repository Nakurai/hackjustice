"use strict";

var artwork = require('../../models/artwork').artwork;

class GetArtwork{

    /**
    */
    constructor() {}

    get(){
      var that = this;

      return new Promise(
      (resolve, reject)=>{
        try {
          artwork.getModel().find({})
          .exec((err, res)=>{
            if(err){
              reject(err);
            }
            else{
              resolve(res)
            }
        });
        } catch (e) {
          reject(e.message);
        }
      });
    }

    prices(){
      return {
        'print':{
          '4x6':5,
          '5x7':10,
          '8x10':20,
          '16x20':40,
          'shipTO':5,
          'ship':12,
        },
        'fprint':{
          '4x6':10,
          '5x7':15,
          '8x10':25,
          '16x20':45,
          'shipTO':5,
          'ship':12
        },
        'original':{
          'shipTO':5,
          'ship':12
        }
      };
    }




}

module.exports.get = new GetArtwork();
