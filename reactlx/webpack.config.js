var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.resolve(__dirname,"src"),
  devServer: { historyApiFallback: true },
  entry: "./js/root.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: [
                    'react-html-attrs',
                    ["import", {"libraryName": "antd", "style": "css"}]
                   ], //添加组件的插件配置
        }
      },
      //下面是添加的 css 的 loader，也即是 css 模块化的配置方法
     {
       test: /\.css$/,
       //loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
       loader: 'style-loader!css-loader'
     },
    ]
  },
  output: {
    path: path.resolve(__dirname,"src"),
    filename: "bundle.js",
    publicPath: '/src/'
    }
};
