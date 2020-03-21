module.exports = {
  css: { extract: false },
  chainWebpack: config => {
    config.externals(['@vue/composition-api'])
  }
}
