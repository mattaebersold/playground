export default {

  modules: [
    '@cloak-app/boilerplate',
    '@cloak-app/visual',
    'modules/customize-cloak-boilerplate'
  ],

  buildModules: [
    '@bkwld/vue-in-view/nuxt',
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sanity/module',
    'packages/cloak-sanity/modules/generate-pages',
  ],

  plugins: [
    '~/plugins/preview.client.js',
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

  gtm: {
    id: process.env.GTM_ID
  },

  // Sanity settings
  sanity: {
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_DATASET,
    additionalClients: {
      preview: {
        projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.PUBLIC_SANITY_DATASET,
        token: process.env.PUBLIC_SANITY_READ_TOKEN,
        useCdn: false,
      },
    },
  },

  // Use Sanity with @nuxt/image
  image: {
    provider: 'sanity',
    sanity: {
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET,
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
  },

  generate: {
    fallback: true,
  }

}
