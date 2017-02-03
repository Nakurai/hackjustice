"use strict;"

function User() {
  var that = this;
  this.localDbName = 'user';
  this.store = new Db(this.localDbName);

  this.list = [];

}


User.prototype = {

  login:function(userInfo){
    var d = $.Deferred(),
    that = this;

    api.post('auth/login', userInfo)
    .done(function(user){
      that.putTokenIntoHeader(user.token);
      d.resolve(user);
    })
    .fail(function(err){
      d.reject(err);
    });

    return d;
  },

  signup:function(userInfo){
    var d = $.Deferred(),
    that = this;

    api.post('auth/signup', userInfo)
    .done(function(user){
      that.putTokenIntoHeader(user.token);
      d.resolve(user);
    })
    .fail(function(err){
      d.reject(err);
    });

    return d;
  },

  putTokenIntoHeader:function(token){
    // WOW ! The user is logged ! their token is stored locally and the headers of each ajax request is modified
    $.ajaxSetup({
      headers: {
        'amatart-access-token': token
      }
    });

  },

  isLoggedIn: function(){
    var d = $.Deferred(),
    that = this;

    api.get('auth/isLoggedIn')
    .done(function(isLoggedIn){
      d.resolve(isLoggedIn);
    })
    .fail(function(err){
      d.reject(err);
    });

    return d;

  }

};
