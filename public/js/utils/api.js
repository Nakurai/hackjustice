"use strict;"

/**
 * This class handles all the local storage thing. To prevent data snooping, we limit the storage to the live session
 * If no local strage is supported, then we'll use an in memory structure
 * @todo check if the in-memory case affects performance
 */
function Api(){}

Api.prototype = {

  /**
  send a GET request to the server. Server's answer is: {'ok':boolean, 'data':relevant_information}
    @param path
    @return a promise
  */
  get: function(path){
    var d = $.Deferred(),
    that = this;

    $.ajax({
          'url':'/api/'+path,
          'method':'GET',
          'dataType':'json'
      }).done(function(data){
          // check if it's okay and store the unique temporary key in the local session
          if(data.ok){
            d.resolve(data.data);
          }
          else{
            d.reject(data.err);
          }
      }).fail(function(err){
        d.reject(err);
      });

    return d;
  },

  /**
  send a GET request to the server
    @param path
    @return a promise with
  */
  post: function(path, dataToPost){
    var d = $.Deferred(),
    that = this;

    dataToPost = JSON.parse(JSON.stringify(dataToPost));
    $.ajax({
        'url':'/api/'+path,
        'method':'POST',
        'data':dataToPost,
        'dataType':'json'
      }).done(function(data){
          // check if it's okay and store the unique temporary key in the local session
          if(data.ok){
            d.resolve(data.data);
          }
          else{
            d.reject(data.err);
          }
      }).fail(function(err){
        d.reject(err);
      });

    return d;
  }

}
