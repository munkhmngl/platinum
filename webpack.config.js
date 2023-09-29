const path = require('path');
const postCSSPlugins = [require('postcss-simple-vars'), require('postcss-nested'), require('autoprefixer'), require('postcss-import')];
module.exports = {
    entry: './app/scripts/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app')
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}
                }]
            }
        ]
    }
};