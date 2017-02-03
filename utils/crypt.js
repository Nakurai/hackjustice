var bcrypt = require('bcryptjs')
njwt = require('njwt'),
secureRandom = require('secure-random');


class Crypt{

  constructor(){
    this.SALT_WORK_FACTOR = 10;
  }

  hash(textToHash){
    var that = this;
    return new Promise(
    (resolve, reject)=>{
      bcrypt.genSalt(that.SALT_WORK_FACTOR, function(err, salt) {
        if (err){
          reject(err);
        }
        else{
          // hash the password using our new salt
          bcrypt.hash(textToHash, salt, function(err, hash) {
            if (err)
              reject(err);

            resolve(hash);
          });
        }
      });
    });
  }

  compare(reference, challenger){
    return new Promise(
    (resolve, reject)=>{
      bcrypt.compare(challenger, reference, function(err, isMatch) {
          if (err){
            reject(err);
          }
          else{
            if(isMatch){
              resolve();
            }
            else{
              reject();
            }
          }
      });
    });
  }

  /**
   * Create and store the json web token using the njwt module
   */
  createToken(text){
    var jwt = null;
    var signingKey = secureRandom(256, {type: 'Buffer'}); // Create a highly random byte array of 256 bytes
    var claims = {
        iss: "http://swosh.ca/",
        sub: text
    }
    var stringKey = signingKey.toString('base64');

    jwt = njwt.create(claims, stringKey);
    jwt.setExpiration(new Date().getTime() + (48*60*60*1000)); // Three hours from now

    // saving the key to be able to compare it afterwards
    jwt = jwt.compact();

    return {'token':jwt, 'key':signingKey};
  }

  /**
   * Return a string we hope is unique
   */
  createCode(){
      var d = new Date(),
      rand = this.getRandomString(15);
      return d.getDay()+''+d.getMonth()+rand+d.getDate()+''+d.getSeconds()+''+d.getHours();
  };


  /**
   * Return a random string
   * @param nbChar the desired length of the string
   */
  getRandomString(nbChar){

      var text = [],
      possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for( var i=0; i < nbChar; i++ ){
          text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
      }

      return text.join('');
  };

}

module.exports.crypt = new Crypt();
