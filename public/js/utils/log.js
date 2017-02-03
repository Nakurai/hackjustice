"use strict;"

function Mylog(){
  this.billboard = $('#billboard');
  this.DELAY = 2.5;
}

/**
@todo imagine funny default messages
*/
Mylog.prototype = {

  err: function(text){
      text = text || 'Error';
      console.log('ERR - '+JSON.stringify(text, null, 2));
      this.showBillboard('err', text);

  },

  val: function(text){
      text = text || 'Everything is ok';
      console.log('OK - '+JSON.stringify(text, null, 2));
      this.showBillboard('val', text);
  },

  inf: function(text){
      text = text || 'You are now informed...hope it feels good';
      console.log('INFO - '+JSON.stringify(text, null, 2));
      this.showBillboard('inf', text);
  },

  dev: function(text){
        console.log('DEV - '+JSON.stringify(text, null, 2));
  },

  /**
  Make the billboard div appear after using the appropriate color depending on the mode
  @param mode and msgare string
  @return nothing
  */
  showBillboard: function(mode, msg){
    var that = this;
    this.billboard.removeClass();

    var colorClass = '';
    switch (mode) {
      // validation
      case 'val':
        colorClass = 'w3-green';
        break;
      // error
      case 'err':
        colorClass = 'w3-red';
        break;
      // informative text
      case 'inf':
        colorClass = 'w3-blue';
        break;
      default:
        colorClass = 'w3-blue';
    }

    this.billboard.addClass('w3-bottom w3-container w3-card-4 w3-margin-top '+colorClass);
    this.billboard.html( '<p> '+msg+' </p>');

    setTimeout(function () {
      that.billboard.addClass('w3-hide');
    }, 1000*that.DELAY);
  }

};
