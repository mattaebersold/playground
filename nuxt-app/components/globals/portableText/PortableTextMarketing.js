import PortableTextBase from "./PortableTextBase"

// Render a PortableTextBase instance designed for placement in marketing
// blocks
export default {
  functional: true,

  // Share all props from Base, and alignment from parent
  props: { ...PortableTextBase.props, alignment: String },

  render(create, { props, data }) {
    return create(PortableTextBase, {
      props, // Passthrough all props

      // Add Sanity/typography prose classes
      class: ['prose-marketing', data.class],
    })
  }
}
