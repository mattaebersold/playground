import { Block, SanityObject, PageSeo } from './index'

// The Sanity schema type names that generate pages
export enum PageType {
  Tower = 'tower',
}

// A helper type for a Santiy document whose type is one of the page types
export interface PageDocument extends SanityObject {
  _type: PageType
  title: string
  uri: { current: string }
}

// Tower page type
export interface Tower extends PageDocument, PageSeo {
  blocks: Block[]
}
