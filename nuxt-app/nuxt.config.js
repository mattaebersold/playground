export default {

  modules: [
    '@cloak-app/boilerplate',
    '@cloak-app/visual',
    'modules/customize-cloak-boilerplate'
  ],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
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

  // Load Google Fonts
  googleFonts: {
    families: { Inter: {
        wght: '100..900'
      },
    }
  },

  // Sanity settings
  sanity: {
    projectId: 'rnb0s8f2',
    dataset: 'production',
  },

  // Use Sanity with @nuxt/image
  image: {
    provider: 'sanity',
    sanity: {
      projectId: 'rnb0s8f2',
      dataset: 'production',
    }
  },

  // Customize Tailwind
  tailwindcss: {
    cssPath: '~/styles/global.css',
  },

  // Disable type checking in Nuxt since we're only adding this at the moment
  // to import types from sanity-cms directory
  typescript: {
    typeCheck: false,
  }

}
