"use strict";


/*****************************
 Dependencies loading
*****************************/
var express = require('express'),
    bodyParser = require('body-parser'),
    myApp = require('./app.js').app,
    conf = require('./config'),
    app = express();


/*****************************
 * Configuring
/*****************************/

/*****************************
 Server parameters definition
******************************/
// the ./public directory will be parsed when js script or images are loaded through html pages
app.use('/img', express.static(  __dirname+'/public/img' ) );
app.use('/js', express.static(  __dirname+'/public/js' ) );
app.use('/css', express.static(  __dirname+'/public/css' ) );

// bodyparser is used to get "POST" parameters from a formà
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ejs is used to render html pages !
app.engine('ejs', require('ejs').renderFile);
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');


/*****************************
 Custom variables definition
******************************/

var port = process.env.PORT || 8081;
console.log('will listen on port '+port);


/*****************************
 Security managemnt !
******************************/





/*****************************
 Router
*****************************/
// home page
app.get('/', function(req, res) {
  res.render('home', {route:null});
});
// home page
app.get('/home', function(req, res) {
  res.render('home', {route:'home'});
});

app.get('/form', function(req, res) {
  res.render('home', {route:'form'});
});

app.get('/options', function(req, res) {
  res.render('home', {route:'options'});
});

app.get('/lawyers', function(req, res) {
  res.render('home', {route:'lawyers'});
});

/*****************************
 API
*****************************/

app.post('/api/user/situation', function(req, res) {

  myApp.userSituation(req.body.user)
  .then(function(validOptionCodes) {
    res.json({'ok':true, 'data':validOptionCodes});
  }).catch(function (err) {
    res.json({'ok':false, 'err':err});
  });

});

app.get('/api/options', function(req, res) {

  myApp.optionsGet(null)
  .then(function(optionsList) {
    res.json({'ok':true, 'data':optionsList});
  }).catch(function (err) {
    res.json({'ok':false, 'err':err});
  });

});

app.get('/api/options/:code', function(req, res) {

  myApp.optionsGet(req.params.code)
  .then(function(optionsList) {
    res.json({'ok':true, 'data':optionsList});
  }).catch(function (err) {
    res.json({'ok':false, 'err':err});
  });

});




// 404 handling
app.use(function(req, res, next){
  console.log('404 for: '+req.url);
  return res.render('not_found');
  //res.end();
});

// When the server must be shut down, some operations can be executed
var gracefulShutdown = function(){
	console.log('Server is shutting down');
	process.exit();
}

// listen for TERM signal .e.g. kill
process.on ('SIGTERM', gracefulShutdown);

// listen for INT signal e.g. Ctrl-C
process.on ('SIGINT', gracefulShutdown);

/*****************************
 The application server listens on port 8081
*****************************/
myApp.prepare().then(
    ()=>{
      app.listen(port);
      console.log(Date()+'Server is on');
    }
);
