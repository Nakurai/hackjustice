"use strict;"

/*bus = new Vue(),*/
var settings = new Settings(),
log = new Mylog(),
api = new Api();

function App(route) {
  var that = this;
  this.page = null;
  route = this.analyzeRoute(route);

//cart.store.db.destroy();

  this.errorPage = 'home';
  this.currentPage = '';
  this.previousPage = '';



  settings.init()
  .done(function(settings){
    that.currentPage = route.page || settings.currentPage;
    that.previousPage = route.page || settings.previousPage;

    that.initApp()
    .done(function(){
      this.header = new pHeader();
      //this.footer = new pFooter();
      that.route(that.currentPage, route.param);
    })
    .fail(function(err){
      that.route(that.errorPage);
    });

  })
  .fail(function(err){
    apptools.log.err(err);
  });


}


App.prototype = {
  /**
  Initialization of the App, creates all the necessary local data,
  contact server for info...
  */
  initApp: function(){
    var d = $.Deferred(),
    that = this;

    try {

      // here param is an object {destination, param}, param being any other parameter we want
      // if param is a string, then it is the destination
      $('body').on('myapp.goto', function(event, param){
        if(param.destination){
          //console.log('go to '+param.destination);
          that.route(param.destination, param.param);
        }
      });

      d.resolve();
    } catch (e) {
      log.err(e.message);
      d.reject();
    }

    return d;
  },

  /**
  Analyze the path given as a parameter to the contructor, then separate the target page from additinoal parameter:
  on a split by '/', the first portion is the target page and all the others are parameters
  @param path is a string
  */
  analyzeRoute: function(path){
    var route = {};
    path = path.split('/');
    route.page = path[0];
    path.shift();
    route.param = path;
    return route;
  },

  /**
  load the relevant page
  */
  route: function(path, param){

    if(this.page){
      delete this.page;
    }

    // catching error from any of these page so the app does not crash
    try {

      switch(path || '/') {
        case 'home':
            this.page = new pHome();
            break;
        case 'form':
            this.page = new pForm();
            break;
        case 'options':
            this.page = new pOptions(param);
            break;
        default:
            this.page = new pHome();
      }

      // saving the route to handle page reload
      this.previousPage = this.currentPage;
      this.currentPage = path;
      settings.changePage(this.currentPage, this.previousPage);

    } catch (e) {
      log.err(e.message);
    }

  }

}
