const port = (process.env.PORT || 8081)
const path = require("path");
const app = require('./server/index.js').app()
const reactHelmet = require("react-helmet");

if (process.env.NODE_ENV !== 'production') {
	//webpack
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.dev.js')
  const compiler = webpack(config)
  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}


app.get("/*", function (req, res) {
  //res.sendFile("index.html", {root: path.join(__dirname, "./public") })

  const helmet = reactHelmet.Helmet.renderStatic();
  const html = `
      <!doctype html>
      <html ${helmet.htmlAttributes.toString()}>
          <head>
              ${helmet.title.toString()}
              ${helmet.meta.toString()}
              ${helmet.link.toString()}
          </head>
          <body ${helmet.bodyAttributes.toString()}>
            <div id="root"></div>
            <script src="./app.bundle.js"></script>
          </body>
      </html>
  `;

  res.send(html)
});

//app.listen(port,function(){
//    console.log("Started listening on port", port);
//})
//if (process.env.NODE_ENV !== 'production')
//	https.createServer(options, app).listen(port);
//else
app.listen(port,function(){
	console.log("Started listening on port", port);
})
