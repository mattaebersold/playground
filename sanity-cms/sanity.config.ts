import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schema} from './config/schema'
import {defaultDocumentNode, structure} from './config/structure'

export default defineConfig({
  name: 'default',
  title: 'Nuxt Sanity Demo',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  schema,
  plugins: [
    deskTool({
      structure,
      defaultDocumentNode,
    }),
    visionTool()],
})
