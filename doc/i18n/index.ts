module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'EN',
      file: 'en.ts',
    },
  ],
  defaultLocale: 'en',
  seo: true,
  lazy: true,
  // baseUrl: process.env.APP_URL,
  detectBrowserLanguage: {
    cookieKey: 'redirected',
    useCookie: true,
  },
  langDir: 'i18n/',
  parsePages: false,
  vueI18n: {
    fallbackLocale: 'en',
  },
};
