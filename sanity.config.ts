import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: '9dtu6n3i',
  dataset: 'production',

  plugins: [deskTool(), visionTool(),vercelDeployTool()],

  schema: {
    types: schemaTypes,
  },
})
