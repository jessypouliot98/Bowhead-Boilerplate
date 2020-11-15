const webpack = require('webpack');
const path = require('path');
const tailwindcss = require('tailwindcss');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { default: Config } = require('@whalr/humpback/lib/Support/Config/Config');

const typescriptRules = {
	test: /\.(ts|tsx)?$/,
	use: 'ts-loader',
	exclude: /node_modules/,
};


const styleRules = {
	test: /\.(c|s[ac])ss$/i,
	use: [
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
};

const baseConfig = {
	entry: path.join(__dirname, 'resources/ts/app/index.tsx'),
	plugins: [
		new MiniCssExtractPlugin({ filename: '../css/style.css' }),
	],
	module: {
		rules: [
			typescriptRules,
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

module.exports = (env, argv) => {
	const config = { ...baseConfig };

	if (argv.mode === 'production' || Config.mode.isProduction()) {
		config.mode = 'production';

		config.module.rules = [
			...config.module.rules,
			{
				...styleRules,
				use: [
					MiniCssExtractPlugin.loader,
					...styleRules.use,
				],
			},
		];
	} else {
		config.mode = 'development';

		config.module.rules = [
			...config.module.rules,
			{
				...styleRules,
				use: [
					'style-loader',
					...styleRules.use,
				],
			},
		];
	}

	return config;
};
