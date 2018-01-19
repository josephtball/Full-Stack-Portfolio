var path = require('path');
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
					use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
					fallback: 'style-loader'
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