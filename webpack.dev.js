const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');



module.exports = merge({
	mode: 'development',
	devtool: 'inline-source-map',
  entry: {
    app: ['webpack-hot-middleware/client']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development'),
          'DOMAIN': JSON.stringify('http://www.chi-lin.com'),
          'PORT': JSON.stringify('8081')
      }
    })
  ]
}, common );
