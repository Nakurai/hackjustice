"use strict";
var config = require('./config'),
mongoose = require('mongoose'),
db = mongoose.connection,
initdb = require('./utils/initdb').db,
user = require('./api/user/post').post,
options = require('./api/options/get').get;
//mail = require('./utils/mail').mail;

class App{

    /**
    */
    constructor() {}

    /**
     * if anything has to be done before the server is on, this is the function to do it !
     for now, the only thing done is establishing the connection to the database
     */
    prepare(){

        return new Promise(
        (resolve, reject)=>{
          resolve();
          /*
          local db startup
          db.once('open', function() {
            console.log('Database connection established');
            resolve();
          });
          var dbUrl = 'mongodb://'+config.db.host+':'+config.db.port+'/'+config.db.name;
          mongoose.connect(dbUrl, {server: {auto_reconnect: true}});
          */
        });

    }

    userSituation(information){
      return user.situation(information);
    }

    optionsGet(code){
      return options.options(code);
    }



}

module.exports.app = new App();
