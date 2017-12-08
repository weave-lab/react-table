const webpack = require('webpack')
module.exports = {
  entry: './lib/index.js',
  output: {
    filename: './react-table.js',
    libraryTarget: 'umd',
    library: 'WeaveReactTable'
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
