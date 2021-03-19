const path = require('path');

let libraryName = 'revogrid';
module.exports = {
  entry: {
    [libraryName]: './src/revogrid.ts'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: 'revogrid',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    '@revolist/revogrid': '@revolist/revogrid',
    '@revolist/revogrid/loader': '@revolist/revogrid/loader',
    '@stencil/core': '@stencil/core'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
