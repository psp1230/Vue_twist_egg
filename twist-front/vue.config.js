const webpack = require("webpack");

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  transpileDependencies: ["vuetify"],
  devServer: {
    open: true,
    host: "localhost",
    https: true,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    hotOnly: false,
    proxy: {
      "/data": {
        target: "http://h5.youcanbemama.com",
        changeOringin: true,
        pathRewrite: {
          "^/data": ""
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      })
    ]
  }
};
