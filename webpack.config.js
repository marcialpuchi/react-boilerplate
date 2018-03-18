const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const SRC_DIR = path.resolve(__dirname, 'src');
const APP_DIR = path.resolve(__dirname, 'src/app');

const config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module:{
		rules: [

		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ['env', 'react']
				}
			}
		},

		{
			test: /\.s?css$/,
			use: [ 'style-loader', 'css-loader', "sass-loader"]
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
