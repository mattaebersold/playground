import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { schema } from './config/schema'
import { structure } from './config/structure'

export default defineConfig({
  name: 'default',
  title: 'Nuxt Sanity Demo',
  projectId: 'rnb0s8f2',
  dataset: 'production',
  schema,
  plugins: [
    deskTool({
      structure,
    }),
    visionTool()],
})
