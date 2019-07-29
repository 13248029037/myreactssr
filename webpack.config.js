
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin') ;
module.exports = {
    mode: 'development',
    entry: {
        index: path.join(__dirname, './client/index.js')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: "js/[name].[hash].js",
		chunkFilename: "js/[name].[chunkhash].js",
        publicPath: '/static'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
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
    // optimization: {},
    devtool: '#eval-source-map'
}