const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: ['./client/index.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client'),
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {presets: ['env']}
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "client/components"),
      containers: path.resolve(__dirname, "client/containers"),
      actions: path.resolve(__dirname, "client/actions"),
      //layout: path.resolve(__dirname, "client/components/layouts/layout.css")
    },
  },
	plugins: [
		 new CleanWebpackPlugin(['dist']),
     //new HtmlWebpackPlugin()
  ]
};
