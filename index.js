'use strict';
// call depenancies and configs ================================================
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// configuration ===============================================================
// Set View engine to ejs
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));

// routes ======================================================================
app.use('/', require('./src/routes/index.js')());

// launch ======================================================================
app.listen(3002, function (err) {
  if (err) console.log(err);
  console.log('running server on port ' + 3002);
});