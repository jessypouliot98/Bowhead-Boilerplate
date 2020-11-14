const webpack = require('webpack');
const path = require('path');
const tailwindcss = require('tailwindcss');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	entry: path.join(__dirname, 'resources/ts/app/index.tsx'),
	plugins: [
		new MiniCssExtractPlugin({ filename: '../css/style.css' }),
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			}, {
				test: /\.(c|s[ac])ss$/i,
				use: [
					// 'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								ident: 'postcss',
								plugins: [tailwindcss],
							},
						}
					},
				],
			},
		],
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	output: {
		filename: 'app.js',
		path: path.join(__dirname, 'public/js/'),
	},
};

module.exports = config;
