import express from "express";
import bodyParser from "body-parser";

export function createApp() {
  var app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  return app;
}