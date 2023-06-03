// Map Sanity block types to Nuxt component resolvable paths
const typeMap = {
  heroBlock: 'blocks-hero-block'
}

// Render a list of blocks, wrapping them in BlockParent instances
export default {
  functional: true,

  props: {
    blocks: Array
  },

  render(create, { props }) {

    // Remove blocks that don't have a mapping yet
    return props.blocks.filter(block => {
      return Object.keys(typeMap).includes(block._type)

    // Create child components, spreading block data into props
    }).map(block => {
      return create(typeMap[block._type], {
        key: block._id,
        props: block,
      })
    })

  },
}
