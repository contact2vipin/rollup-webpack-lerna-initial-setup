const path = require('path');
const webpackConfig = require('../../webpack.config');
const Utils = require('../../utils/common.utility');

const AppPaths = Utils.appPaths;

module.exports = webpackConfig(
    {
        entry: {
            app: [
                path.resolve(__dirname, 'src/react/styles.js'),
                path.resolve(__dirname, 'src/react/index.tsx')
            ],
        },
        devServer: {
            
            devMiddleware: {
                publicPath: `${AppPaths.WEP}/`,
                writeToDisk: true,
            },
            historyApiFallback: {
                index: `${AppPaths.WEP}/index.html`,
                //index: `index.html`,
            },
            open: true,
        },
        output: {
            publicPath: `${AppPaths.WEP}/`,
        }
    }
);