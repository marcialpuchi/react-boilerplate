const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const SRC_DIR = path.resolve(__dirname, 'src');
const APP_DIR = path.resolve(__dirname, 'src/app');

const config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module:{
		rules: [

		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		},

		{
			test: /\.scss$/,
			use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
		},

		{
			test: /\.svg$/,
			loader: 'url-loader'
		},

		{
			test: /\.(png|jpg|gif)$/,
			use: [
				{
					loader: 'file-loader',
					options: {}  
				}
			]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
    		alwaysWriteToDisk: true,
    		title: 'React Boilerplate Title',
			template: SRC_DIR + '/index.html'
		}),
		new HtmlWebpackHarddiskPlugin()
	],
	devServer: {
		contentBase: BUILD_DIR,
		port: 9000
	}
};

module.exports = config;
