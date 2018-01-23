var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		client: './client/index.js'
	},
	output: {
		path: path.resolve(__dirname, './public'),
		filename: './js/bundle.js'
	},
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, './client/scss/main.scss')],
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [{
						loader: 'css-loader',
						options: {
							url: false,
							minimize: true,
							sourceMap: true
						}
					}, {
						loader: 'postcss-loader',
							options: {
								plugins: function() {
									return [autoprefixer]
								},
								sourceMap: true
							}
					}, {
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: './css/style.css'
		})
	],
	devtool: 'eval-source-map'
}