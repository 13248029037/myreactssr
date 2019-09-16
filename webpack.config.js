
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin') ;
module.exports = {
    mode: 'development',
    entry: {
        index: path.join(__dirname, './client/client-entry.js')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: "js/[name].[hash].js",
		chunkFilename: "js/[name].[chunkhash].js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
				test: /\.less$/,
				exclude: /node_modules/,
				use: [
					require.resolve("style-loader"),
					require.resolve("css-loader"),
					require.resolve("less-loader")
				],
			},
            {
				test: /\.css$/,
				exclude: /node_moduels/,
				use: [
					"style-loader","css-loader"
				]
			},
            {
				test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
				loader: "url-loader",
				options: {
					limit: 8192
				}
            },
            {
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				loader: "file-loader",
			}
        ]
    },
    resolve: {
        alias: {
            "@": path.join(__dirname, "./src"),
        },
        extensions: [".js", ".jsx", ".less", ".css", "ts", "tsx"]

    },
    plugins: [
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./index.html'),
            title:'bnihao',
            inject:true,
        }),
        new AssetsPlugin({
            path: path.join(__dirname,'dist'),
            filename: 'assets.json',
            fullPath: true
          })
    ],
    devServer:{
        hot:true,
        overlay:true,
        open:true,
        historyApiFallback: true,
    },
    optimization: {
        splitChunks: {
            chunks:'async',
            minChunks:1,
			cacheGroups: { // 单独提取JS文件引入html
				// common: {
				// 	name: "common",
				// 	chunks: "initial",
				// 	test: /\.jsx?$/,
				// 	minSize: 250000,
				// 	maxSize: 300000,
				// 	priority: 20
				// },
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true
				  }
			}
		}
    },
    devtool: 'source-map'
}