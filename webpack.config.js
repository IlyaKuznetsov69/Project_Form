const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, './public'),
  },
  mode: 'development',
  // devtool: 'source-map',
  devServer: {
    publicPath: 'http://localhost:3000/public/',
    openPage: 'public',
    port: 3000
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, 'src/actions/'),
      components: path.resolve(__dirname, 'src/components/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      images: path.resolve(__dirname, 'src/images/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
      App: path.resolve(__dirname, 'src/components/App'),
      ChooseDocType: path.resolve(__dirname, 'src/components/ChooseDocType'),
      ClientData: path.resolve(__dirname, 'src/components/ClientData'),
      InputField: path.resolve(__dirname, 'src/components/InputField'),
      InputFile: path.resolve(__dirname, 'src/components/InputFile'),
      UserDocument: path.resolve(__dirname, 'src/components/UserDocument'),
      Warning: path.resolve(__dirname, 'src/components/Warning')
    }
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["env", "react"],
          plugins: ["transform-object-rest-spread",
            "transform-class-properties"]
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9'
                  ]
                }),
                require('postcss-modules-values')
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // name: '[path][name]-[hash:8].[ext]'
            },
          },
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ]
}