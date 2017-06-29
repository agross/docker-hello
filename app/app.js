'use strict';

console.log('Starting...');

process.on('SIGINT', function () {
  console.log('\nCtrl-C was pressed, exiting');
  process.exit();
});

process.on('SIGTERM', function () {
  console.log('SIGTERM received, exiting');
  process.exit();
});

const express = require('express');
const os = require('os');

const app = express();
app.set('views', 'views');
app.set('view engine', 'jade');

app.locals.env = process.env;
app.locals.os = os;

app.get('/', function (req, res) {
  res.render('index', {});
});

app.listen(8080);

console.log('Started');
