const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				DOMAIN: JSON.stringify('https://dev.chi-lin.com'),
			},
		}),
		new UglifyJSPlugin({
			cache: true,
			sourceMap: true,
			parallel: true,
		}),
	],
});
