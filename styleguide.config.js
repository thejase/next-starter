module.exports = {
  components: 'components/**/[A-Z]*.jsx',
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
  ],
  webpackConfig: {
    module: {
      loaders: [
        {
          test: /\.jsx?(\?[^?]*)?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
            presets: ['@babel/react', '@babel/env'],
          },
        },
      ],
    },
  },
};
