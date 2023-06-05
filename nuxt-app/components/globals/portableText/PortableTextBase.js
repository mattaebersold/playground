// Import SmartLink explicitly
import SmartLink from 'vue-routing-anchor-parser/smart-link'

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

        // Wire up custom components
        serializers: {
          marks: {
            link: makeLinkSerializer(),
          }
        }
      },

      // Prepend Sanity/typography prose base classes
      class: ['prose prose-base', data.class]
    })
  }
}

// Use Smart Link for anchor links by making a functional component that maps
// the portable text link data to what SmartLink is expecting.
function makeLinkSerializer() {
  return {
    functional: true,
    render(create, { props, children }) {
      return create(SmartLink, {
        props: {
          to: props.href, // Sanity stores the link as "href"
        }
      }, children)
    }
  }
}
