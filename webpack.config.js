const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    devtool: 'eval',
    entry: [
        './src/index.js',
        './styles/styles.scss',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/openchs-admin-client/',
    },
    plugins: [
        new ExtractTextPlugin({filename: 'styles.css', allChunks: true}),
        new CopyWebpackPlugin([
                {
                    from: path.join(__dirname, 'styles/fonts'), to: path.join(__dirname, '/dist/fonts'),
                },
            ], { copyUnmodified: true }
        ),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            'Popper': 'popper.js'
        })
    ],
    externals: {
        cheerio: 'window',
        'react/addons': 'react',
        'react/lib/ExecutionEnvironment': 'react',
        'react/lib/ReactContext': 'react',
    },
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader?name=/styles/images/[name].[ext]',
            }]
    }
};