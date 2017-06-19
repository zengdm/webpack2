var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: {
        header: path.resolve(__dirname, 'source/components/header/app.js')
    },

    output: {
        path: path.resolve(__dirname, 'source/components/header'),
        filename: '[name].debug.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
