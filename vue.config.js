const aliases = require('./bin/pathMapping');
const { resolve } = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: Object.assign(aliases, {
        '~': resolve(__dirname, 'src'),
      }),
    },
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
};
