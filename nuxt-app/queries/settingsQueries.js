import { groq } from '@nuxtjs/sanity'

export const getSettings = groq`
  *[_type == 'settings'][0]
`
