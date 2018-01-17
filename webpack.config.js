var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		app: './client'
	},
	output: {
		path: path.resolve(__dirname, './public/assets/js'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, './client/scripts')],
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react']
					}
				}
			},
		]
	},
	devtool: 'eval-source-map'
}