const path = require('path');
const baseConfig = require('../../rollup.config');
const pkg = require('./package.json');

module.exports = Object.assign(baseConfig,
    {
        input: './src/index.ts',
        output: [
            {
                dir: path.dirname(pkg.main),
                format: 'cjs',
                sourcemap: true,
                preserveModules: true,
                preserveModulesRoot: 'src'
            },
            {
                dir: path.dirname(pkg.module),
                format: 'esm',
                sourcemap: true,
                preserveModules: true,
                preserveModulesRoot: 'src'
            },
        ],

    }
);