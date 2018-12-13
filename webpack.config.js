const path = require('path');
const webpack = require('webpack');
// Plugins

function Bundle() {
  const isProd = process.argv.includes('--prod');

  const BabelLoader = {
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-env', {
          targets: {
            browsers: ['>0.25%', 'ie 11', 'not op_mini all']
          },
          modules: false
        }]
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
      ]
    },
  };

  const EsLintLoader = {
    loader: 'eslint-loader',
    options: {
      failOnError: false
    },
  };

  return {
    mode: isProd ? 'production' : 'development',
    entry: {
      common: `${__dirname}/src/entry.js`,
    },
    output: {
      path: `${__dirname}/demo`,
      filename: '[name].bundle.js',
    },
    module: {
      rules: [{
        test: /\.js*/,
        exclude: /node_modules/,
        use: [
          BabelLoader,
          EsLintLoader
        ],
      }],
    },
  };
}

module.exports = Bundle();
