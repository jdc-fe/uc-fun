const glob = require('glob');
const path = require('path');

function toObject(paths) {
  const ret = {};

  paths.forEach((p) => {
    ret[p.split('/').slice(-1)[0]] = path.resolve(__dirname, p);
  });
  return ret;
}

module.exports = {
  mode: 'production',
  entry: toObject(glob.sync('./src/*.js')),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  optimization: {

  }
};
