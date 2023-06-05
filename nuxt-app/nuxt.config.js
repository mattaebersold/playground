export default {

  modules: [
    '@cloak-app/boilerplate',
    '@cloak-app/visual',
    'modules/customize-cloak-boilerplate'
  ],

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity/module',
    'packages/cloak-sanity/modules/generate-pages',
  ],

  // Always show logs (doesn't work from within module)
  build: { quiet: false },

  // Cloak settings
  cloak: {

    boilerplate: {
      siteName: 'nuxt-sanity-demo',
      // polyfills: ['default']
    },

    sanity: {
      pageTypes: [
        'tower',
      ]
    }
  },

  // Sanity settings
  sanity: {
    projectId: 'rnb0s8f2',
    dataset: 'production',
  },

  // Customize Tailwind
  tailwindcss: {
    cssPath: '~/styles/global.css',
  },

}
