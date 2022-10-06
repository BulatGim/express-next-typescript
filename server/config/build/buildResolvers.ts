import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions):ResolveOptions {
    return {
        extensions: ['.ts', '.js'],
        mainFiles: [options.paths.src],
    };
}
