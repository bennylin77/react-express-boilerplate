const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const path = require("path");
const favicon = require('serve-favicon');
//const db = require('./config/db');
//controllers

//const articleController = require("./controllers/articleController");
//const projectController = require("./controllers/projectController");
//const mediaController = require("./controllers/mediaController");

module.exports = {
  app: function () {
    const app = express();

    //app.use(favicon(path.join(__dirname,"./favicon.ico")));
    app.use(express.static(path.join(__dirname,"../public")));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    //app.use("/api/articles", articleController);
    //app.use("/api/projects", projectController);
    //app.use("/api/media", mediaController);
    return app;
  }
}
