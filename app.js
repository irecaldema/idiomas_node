/**
 * Module dependencies.
 */
var express = require('express'),
  cookieParser = require('cookie-parser'),  
  i18n = require('i18n'),
  app = express();

/*
 * View engine
*/
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

/*
 * i18n 
*/
i18n.configure({
  // setup some locales - other locales default to en silently
  locales: ['es', 'eu'],
 
  // sets a custom cookie name to parse locale settings from
  cookie: 'idiomas',
 
  // where to store json files - defaults to './locales'
  directory: __dirname + '/locales'
});


// you will need to use cookieParser to expose cookies to req.cookies
app.use(cookieParser());

// i18n init parses req for language headers, cookies, etc.
app.use(i18n.init);

/**
 * Controladores
 */
var indexController = require('./controllers/Index');

app.get('/', indexController.index);

app.listen(3000);