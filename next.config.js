const path = require('path');
const withSass = require('@zeit/next-sass');

const options = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[path][name]__[local]--[hash:base64:5]',
  },
  webpack: (config, { dev }) => {
    const customConfig = { ...config };
    if (customConfig.resolve.alias) {
      delete customConfig.resolve.alias.react;
      delete customConfig.resolve.alias['react-dom'];
    }

    const eslint = {
      test: /\.jsx?$/,
      enforce: 'pre',
      options: {
        configFile: path.resolve('.eslintrc.js'),
        eslint: {
          configFile: path.resolve(__dirname, '.eslintrc.js'),
        },
        emitWarning: dev,
      },
      loader: 'eslint-loader',
    };

    customConfig.module.rules.unshift(eslint);

    return customConfig;
  },
});

module.exports = options;
