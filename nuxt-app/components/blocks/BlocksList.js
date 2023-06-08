import BlockParent from "./BlockParent"

// Map Sanity block types to Nuxt component resolvable paths
const typeMap = {
  heroBlock: 'BlocksHeroBlock',
  ctaBlock: 'BlocksCtaBlock',
}

// Render a list of blocks, wrapping them in BlockParent instances
export default {
  functional: true,

  props: {
    blocks: Array
  },

  render(create, { props }) {

    // Remove blocks that don't have a mapping yet
    return (props.blocks || []).filter(block => {
      return Object.keys(typeMap).includes(block._type)
    })

    // Remove explicily disabled blocks
    .filter(block => !block.disabled)

    // Create block listing
    .map(block => {

      // Make BlockParent wrapper,
      return create(BlockParent, {
        props: block, // Spread block props
      }, [

        // Make the actual block
        create(typeMap[block._type], {
          key: block._id,
          props: block, // Spread block props
        })
      ])
    })

  },
}
