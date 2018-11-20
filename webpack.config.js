module.exports = {
  output: {
    libraryTarget: 'umd',
    globalObject: 'this' // https://github.com/webpack/webpack/issues/6522
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              forceAllTransforms: true
            }]
          ]
        }
      }
    ]
  }
}
