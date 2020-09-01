// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

/**
 * 为什么使用 js 抛出？
 * 因为该项目内置了 Webpack，而对 Webpack Resolver 的配置则直接写在本文件中
 */
module.exports = {
  root: true,
  extends: ['shiwangme', '@nuxtjs', 'prettier', 'prettier/vue', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  globals: {
    authcode: true
  },
  rules: {
    'import/prefer-default-export': 0,
    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': false
      }
    ]
  },
  settings: {
    'import/core-modules': ['vue', 'vuex', 'moment'],
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['node_modules', path.resolve(__dirname)],
            extensions: ['.js', '.vue'],
            alias: {
              // 主要是配置目录别名，以防 ESLint 报错
              '~': path.resolve(__dirname),
              '~~': path.resolve(__dirname),
              '@': path.resolve(__dirname),
              '@@': path.resolve(__dirname)
            }
          }
        }
      }
    }
  }
};
