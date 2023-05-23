export default {

  modules: [
    '@cloak-app/boilerplate',
    '@cloak-app/visual',
  ],

  buildModules: [
    '@nuxtjs/sanity/module'
  ],

  // Temporarily hardcode dynamic routes
  generate: {
    routes: ['/']
  },

  // Always show logs (doesn't work from within module)
  build: { quiet: false },

  // Cloak settings
  cloak: {
    boilerplate: {
      siteName: 'nuxt-sanity-demo',
      // polyfills: ['default']
    },
  },

  // Sanity settings
  sanity: {
    projectId: 'rnb0s8f2',
    dataset: 'production',
  }

}
