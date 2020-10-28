module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'nosources-source-map',
  },
  devServer: {
    disableHostCheck: true,
  },
  parallel: true,
  filenameHashing: false,
};
