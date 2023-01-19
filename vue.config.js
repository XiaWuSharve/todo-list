const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    index: {
      entry: 'src/main.js'
    }
  },
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/todo-list/'
    : '/',
})
