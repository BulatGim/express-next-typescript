import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './server/config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './server/config/build/types/config';

export default (env: BuildEnv) => {
    const paths:BuildPaths = {
        entries: path.resolve(__dirname, "server",  'index.ts'),
        build: path.resolve(__dirname, "server", 'build'),
        src: path.resolve(__dirname, "server"),
    };
    const mode = env.mode || 'development';

    const isDev = mode === 'development';

    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
    return config;
};
