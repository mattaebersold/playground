import { groq } from '@nuxtjs/sanity'

export const blocksFragment = groq`
  ...,

  // De-reference image fields for acccessing image metadata
  _type == 'heroBlock' => {
    background { ..., asset-> }
  },

`
