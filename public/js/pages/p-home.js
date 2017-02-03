"use strict;"

var log = new Mylog();
var api = new Api();

function pHome() {
  // then, loading of the view displayed to the user
  this.view = new vHome();
  this.view.load();


  // and finally loading all the events for this view!
  this.loadEvents();

  this.init();

}

pHome.prototype = {


  /**
    clear the DOM from this page event
    Has to be called before laoding a new page
  */
  unload: function(){
    //ko.cleanNode();
  },

  /**
  */
  init: function(){
    var that = this;
  },

  loadEvents: function(){
    var that = this;

        var slides = $('.slide'),
        index = 0;
        $('#slideLeft').click(function(){
          $(slides[index]).addClass('w3-hide');
          index--;
          if(index<0)
            index = slides.length-1;
          $(slides[index]).removeClass('w3-hide');
        });
        $('#slideRight').click(function(){
          $(slides[index]).addClass('w3-hide');
          index++;
          if(index>slides.length-1)
            index = 0;
          $(slides[index]).removeClass('w3-hide');
        });
  }

};
