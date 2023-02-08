const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/frontpage.js',
    another: './src/menu.js',
    another: './src/contact.js',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
