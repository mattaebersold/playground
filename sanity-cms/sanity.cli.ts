import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({

  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },

  // Support import aliases from next-sanity-demo
  vite: {
    resolve: {
      alias: {
        '~/sanity': __dirname,
        '~': __dirname,
      },
    }
  },
})
