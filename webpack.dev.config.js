'use strict';

let config = require('./webpack.config');
let webpack = require('webpack');
config.devtool = 'source-map';

config.plugins.push(
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    }));

module.exports = config;