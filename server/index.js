const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const path = require("path");
const favicon = require('serve-favicon');
const db = require('./config/db');
//controllers
const videoController = require("./controllers/videoController");


module.exports = {
  app: function () {
    const app = express();

    //app.use(favicon(path.join(__dirname,"./favicon.ico")));
    app.use(express.static(path.join(__dirname,"../public")));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use("/api/video", videoController);
    return app;
  }
}
