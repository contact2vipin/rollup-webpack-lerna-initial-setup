const path = require('path');
const webpackConfig = require('../../webpack.config');
const Utils = require('../../utils/common.utility');

const AppPaths = Utils.appPaths;

module.exports = webpackConfig(
    {
        entry: {
            app: [
                path.resolve(__dirname, 'src/styles.js'),
                path.resolve(__dirname, 'src/index.tsx')
            ],
        },
        devServer: {
            
            devMiddleware: {
                publicPath: `${AppPaths.WEM}/`,
                writeToDisk: true,
            },
            historyApiFallback: {
                index: `${AppPaths.WEM}/index.html`,
                //index: `index.html`,
            },
            open: true,
        },
        output: {
            publicPath: `${AppPaths.WEM}/`,
        }
    }
);