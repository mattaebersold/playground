// Render a @nuxtjs/sanity instance with our customizations
export default {
  functional: true,

  props: {
    value: Array, // An array of PortableText blocks
  },

  render(create, { props, data }) {

    // Require content
    if (!props.value) return

    // Make a @nuxtjs/sanity content component
    return create('SanityContent', {
      props: {

        // Using "value" for prop to match @portabletext/react
        blocks: props.value,
      },

      // Prepend Sanity/typography prose base classes
      class: ['prose prose-base', data.class]
    })
  }
}
