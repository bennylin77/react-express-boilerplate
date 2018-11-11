const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const path = require("path");
const favicon = require('serve-favicon');
const db = require('./config/db');
const passport = require('passport');
require('./passport');
//controllers
const authController = require("./controllers/authController");
const videoController = require("./controllers/videoController");

module.exports = {
  app: function () {
    const app = express();
		app.use(passport.initialize());
    app.use(express.static(path.join(__dirname, "./public"))); // for serving static files (e.g. images)
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use("/api/videos", passport.authenticate('jwt', {session: false}), videoController);
		app.use('/api/auth', authController);
    return app;
  }
}
