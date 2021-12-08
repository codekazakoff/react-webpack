const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode : "production",

  entry : {
    main : './src/index.js'
  },

  output : {
    filename : "bundle.js",
    path : path.resolve(__dirname,'build') 
  },

  plugins : [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template : path.resolve(__dirname, "public/index.html"),
    })
  ],

  devServer : {
    static : {
      directory : path.join(__dirname, "build"),
    },
    port : 3000,
  },

  module : {
    rules : [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          },
        },
      },
      {
        test : /\.css$/,
        use : [
          'style-loader', 'css-loader',
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader", 
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
      ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ]
      }
    ],
  }
}