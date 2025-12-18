const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const pkg = require(path.resolve(process.cwd(), 'package.json'));
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const { ifProd } = require('./utils/common.utility');

const devServerConfig = {
    config: (customConfig) => ({
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 3010,
    }),
    validator: (config) => {
        if (!config.devServer || (config.devServer && !config.devServer.devMiddleware)) {
            throw new Error('Incomplete devServer configuration');
        }
        if (!config.devServer.devMiddleware.publicPath) {
            throw new Error('Missing devServer publicPath');
        }
    }
}

const entryConfig = {
    config: (customConfig) => ({}),
    validator: (config) => {
        if (!config.entry || Object.keys(config.entry).length === 0) {
            throw new Error('Missing entry point.');
        }
    }
}

const outputConfig = {
    config: (customConfig) => ({
        path: path.resolve(__dirname, 'dist'),
        filename: 'wem-[name].js?v=[hash]',
        chunkFilename: ifProd('chunks/[id].[name].js?v=[hash]', 'wem-[name].js?v=[hash]'),
        clean: true, // This clears the directory before each build
    }),
    validator: (config) => {
        if (!config.output.publicPath) {
            throw new Error('Missing output publicPath');
        }
    }
}

const resolveConfig = {
    config: (customConfig) => ({
        modules: [
            path.resolve(process.cwd(), 'src/react'),
            path.resolve(__dirname, 'node_modules'),
            path.resolve(process.cwd(), 'node_modules'),
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css', '.json'], // Important for resolving imports
    }),
    validator: (config) => {

    }
}

const optimizationConfig = {
    config: (customConfig) => ({
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxAsyncRequests: Infinity,
            maxInitialRequests: Infinity,
        },
    }),
    validator: (config) => {

    }
}

const moduleConfig = {
    config: (customConfig) => ({
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    /node_modules/,
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(process.cwd(), 'node_modules'),
                    ...(
                        fs.readdirSync(path.join(__dirname, 'packages'))
                            .filter(f => f !== path.basename(process.cwd()))
                            .map(f => path.join(__dirname, 'packages', f))
                    )
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: [
                    /node_modules/,
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(process.cwd(), 'node_modules'),
                    ...(
                        fs.readdirSync(path.join(__dirname, 'packages'))
                            .filter(f => f !== path.basename(process.cwd()))
                            .map(f => path.join(__dirname, 'packages', f))
                    )
                ],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // Webpack by default bundles CSS into JavaScript unless you use a plugin like MiniCssExtractPlugin to extract CSS into separate files
                    /* 'style-loader', // It Injects styles into the DOM and also injects CSS into JS  */
                    /** Note: As we are using MiniCssExtractPlugin.loader, we must not use style-loader otherwise code will not work. */
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // Webpack by default bundles CSS into JavaScript unless you use a plugin like MiniCssExtractPlugin to extract CSS into separate files
                    /* 'style-loader', // It Injects styles into the DOM and also injects CSS into JS  */
                    /** Note: As we are using MiniCssExtractPlugin.loader, we must not use style-loader otherwise code will not work. */
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                namedExport: false // When namedExport is set to false, it means that when you import a CSS Module in your JavaScript, it will be imported as a default export
                            },
                            
                        },
                    },
                    'postcss-loader',
                    'sass-loader'
                ],
            }
        ]
    }),
    validator: (config) => {

    }
}

const pluginsConfig = {
    config: (customConfig) => [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'index.html'),
            package: pkg,
            chunksSortMode: 'none',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    validator: (config) => {
        if (!config.output.publicPath) {
            throw new Error('Missing output publicPath');
        }
    }
}

const statsConfig = {
    config: (customConfig) => ({
        
    }),
    validator: (config) => {

    }
}

const config = (customConfig, options = {}) => ({
    devtool: ifProd(false, 'eval-source-map'),
    devServer: devServerConfig.config(customConfig, options),
    entry: entryConfig.config(customConfig, options),
    output: outputConfig.config(customConfig, options),
    resolve: resolveConfig.config(customConfig, options),
    optimization: optimizationConfig.config(customConfig, options),
    module: moduleConfig.config(customConfig, options),
    plugins: pluginsConfig.config(customConfig, options),
    stats: statsConfig.config(customConfig, options),
});

module.exports = (customConfig, options = {}) => {
    devServerConfig.validator(customConfig);
    entryConfig.validator(customConfig);
    outputConfig.validator(customConfig);
    pluginsConfig.validator(customConfig);
    return merge(config(customConfig, options), customConfig);
};