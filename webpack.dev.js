const path = require('path');
const nothExternals = require('webpack-node-externals');

module.exports =  {
  entry: {
    //main: './app.js'
    main: './index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js',
    clean:true
  },
  mode: 'development',
  target: 'node',
  //devtool: 'soruce-map',
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }

    ]
  }
};
