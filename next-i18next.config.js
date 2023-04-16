const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tw', 'jp'],
  },
  localePath:
    typeof window === 'undefined'
      ? path.resolve('./src/locales')
      : './src/locales',
  ns: ['Home'],
  defaultNS: false,
}
