const webpack = require('webpack')
const path = '.env'
require('dotenv').config({ path })

module.exports = {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'redis-ui',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    ZY_ENV: process.env.ZY_ENV
  },
  router: {
    base: ''
  },
  loading: '~/components/Loading.vue',
  // loading: {
  //   color: 'blue',
  //   height: '51px'
  // },

  transition: (to,from) => {
    if (!from) {
      return 'slide-left'
    }
    return  'slide-right'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/pwa', { icon: false }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', ['@nuxtjs/dotenv', { filename: path }]
  ],

  axios: {
    proxy: process.env.NODE_ENV === 'development',
    credentials: true,
    prefix: '/api',
    retry: {
      retries: 3
    },
    baseURL: process.env.BASE_URL
  },
  proxy: {
    '/api': {
      target: process.env.BASE_URL, // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      secure: false,
      pathRewrite: {
        '^/api': ''
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [ /^element-ui/ ],
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
        $: 'jquery'
      })
    ],
  }
}
