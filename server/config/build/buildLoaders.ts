import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: [/node_modules/],
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [],
            },
        },
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
    };

    return [
        babelLoader,
        typescriptLoader,
    ];
}
