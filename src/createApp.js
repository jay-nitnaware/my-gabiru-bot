var express = require("express");
var bodyParser = require("body-parser");


export function createApp() {
  var app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  return app;
}