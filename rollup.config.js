const path = require('path');
const crypto = require('crypto');
const slash = require('slash');
const globby = require('globby');
const babel = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const external = require('rollup-plugin-peer-deps-external');
const typescript = require('@rollup/plugin-typescript');
const postCss = require('rollup-plugin-postcss');
const sassLoader = require('./utils/sass-loader');
const { ifDev } = require('./utils/common.utility');

module.exports = {
    plugins: [
        external(),
        typescript({
            declaration: false,
            declarationDir: undefined,
            outDir: undefined,
            rootDir: undefined,
            tsconfig: './tsconfig.json',
            include: ['src/**/*', '../../.d.ts'],
        }),
        resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react']
        }),
        postCss({
            loaders: [sassLoader],
            use: [[
                'sass-loader',
                { silenceDeprecations: ['legacy-js-api'] } // This option silences the legacy API warning
            ]],
            modules: {
                localsConvention: 'camelCase',
                generateScopedName: (name, filename, css) => {
                    const cssHash = crypto.createHash('md5').update(Buffer.from(css.replace(/[\r\n]/g, ''), 'utf-8')).digest('hex');
                    const file = slash(path.relative(__dirname, filename));
                    const rawIdentifier = `_${file}_${name}_${cssHash}`.replace(/[^a-zA-Z0-9]/g, '_');
                    return ifDev(rawIdentifier,
                        `_${crypto.createHash('md5').update(Buffer.from(rawIdentifier, 'utf-8')).digest('hex')}`);
                }
            },
            autoModules: false,
            extensions: ['.css', '.scss'],
            exclude: [/node_modules/],
            extract: 'style/index.css',
        }),
    ],
    external: [
        ...(globby.globbySync('./{apps,packages}/*/package.json', {
            onlyFiles: true,
            absolute: true,
            cwd: __dirname
        }).map(pkgPath => {
            const pkg = require(pkgPath);
            return pkg.name;
        })), '@babel/runtime', /node_modules/
    ]
}