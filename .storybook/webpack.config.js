const path = require('path');

module.exports = {
  module: {
    output: {
      publicPath: "/public/"
    },
    loaders: [
      {
        test: /.scss$/,
        loaders: ["style", "css", "sass"],
        include: path.resolve(__dirname, '../src/scss/')
      }
    ]
  }
}