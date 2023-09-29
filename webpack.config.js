const path = require('path');
const postCSSPlugins = [require('postcss-simple-vars'), require('postcss-nested'), require('autoprefixer'), require('postcss-import'), require('postcss-mixins')];
module.exports = {
    mode: 'development',
    entry: './app/scripts/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        // before: function(app, server){
        //     server._watch("./app/**/*.html")
        // },
        static: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
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