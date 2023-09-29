const path = require('path');
module.exports = {
    entry: './app/scripts/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app')
    },
    mode: 'development',
    watch: true
};