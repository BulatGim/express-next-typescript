import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
var nodeExternals = require('webpack-node-externals');



export function buildWebpackConfig(options: BuildOptions):webpack.Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode,
        entry: paths.entries,
        module: {
            rules: buildLoaders(),
        },
        target: "node",
        externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
        externalsPresets: {
            node: true // in order to ignore built-in modules like path, fs, etc.
        },
        resolve: buildResolvers(options),
        output: {
            filename: '[name].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
    };
}
