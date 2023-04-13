const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-TW'],
  },
  localePath:
    typeof window === 'undefined'
      ? path.resolve('./src/locales')
      : './src/locales',
  ns: ['Home'],
  defaultNS: false,
}
