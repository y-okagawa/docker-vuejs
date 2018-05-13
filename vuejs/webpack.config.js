const path = require('path');

const config = {
    mode: 'development',
    watch: true,
    entry: './src/app.js',
    output: {
        publicPath: '/assets/js',
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist/js')
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
    }
};

module.exports = config;