const path = require('path');

module.exports = {
  entry: {
    images: path.join(__dirname, '../images-modal/client/src/Index.jsx'),
    bid: path.join(__dirname, '../bid-buy/client/index.jsx'),
    ratings: path.join(__dirname, '../Napoleon-Service/client/src/index.jsx'),
    viewed: path.join(__dirname, '../PeopleAlsoViewed/client/src/index.jsx')
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](styled-components)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    }
  },
   output: {
    filename: '[name].bundle.js',
    path: __dirname + '/public'
  },
  resolve: {
    alias: {
      "styled-components": path.resolve(__dirname, "node_modules", "styled-components")
    }
  }
};
