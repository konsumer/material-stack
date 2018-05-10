import { resolve } from 'path'

import UglifyJSPlugin from 'uglifyjs-webpack-plugin'

export default {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    path: resolve(__dirname),
    filename: 'material-stack.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      extractComments: true
    })
  ],
  performance: { hints: false }
}
