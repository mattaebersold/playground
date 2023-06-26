import { groq } from '@nuxtjs/sanity'
import { blocksFragment } from './fragments/blocksFragment'

export const getTower = groq`
  *[_type == 'tower' && uri.current == $uri]{
    ...,
    'uri': uri.current,
    blocks[] { ${blocksFragment} },
    metaTitle,
    metaDescription,
    metaImage,
    robots
  }[0]
`

// Get all towers
export const towerStaticPaths = groq`
  *[_type == 'tower' && defined(uri)]{
     'uri': uri.current,
  }
`
