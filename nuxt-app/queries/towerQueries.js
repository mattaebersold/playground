import { groq } from '@nuxtjs/sanity'
import { blocksFragment } from './fragments/blocksFragment'

// Get a single tower.
// Using the order() function to get the latest version of the document,
// so we can get the draft version if it exists when using preview mode.
export const getTower = groq`
  *[_type == 'tower' && uri.current == $uri] | order(_updatedAt desc){
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
