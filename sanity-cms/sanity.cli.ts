import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({

  api: {
    projectId: 'rnb0s8f2',
    dataset: 'production'
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
