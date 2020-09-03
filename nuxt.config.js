export default {
  mode: 'universal',
  target: 'static',
  telemetry: false,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1, maximum-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
    // Doc: https://github.com/nuxt-community/stylelint-module
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-i18n'],
  i18n: {
    locales: [
      { name: '简体中文', code: 'zh', iso: 'zh-CN', file: 'zh.yaml' },
      { name: 'English', code: 'en', iso: 'en-US', file: 'en.yaml' }
    ],
    strategy: 'prefix',
    rootRedirect: 'zh',
    defaultLocale: 'zh',
    lazy: true,
    langDir: 'i18n/',
    seo: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    vueI18n: {
      fallbackLocale: 'zh'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    extend(config, { isDev }) {
      // yaml loader rules
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: 'json', // Required by Webpack v4
        use: 'yaml-loader'
      });
      if (isDev) {
        // eslint-disable-next-line no-param-reassign
        config.devtool = '#source-map';
      }
    }
  },
  generate: {
    fallback: true
  }
};
