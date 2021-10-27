const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new ClosurePlugin({mode: 'STANDARD'}, {
        compilation_level: 'ADVANCED',
        language_in: 'ECMASCRIPT_2020',
        language_out: 'ECMASCRIPT_2020'
      })
    ]
  }
});