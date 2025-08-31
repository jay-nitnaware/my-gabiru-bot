var express = require("express");
var bodyParser = require("body-parser");
const axios = require("axios");

export function createApp() {
  var app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  return app;
}


const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;