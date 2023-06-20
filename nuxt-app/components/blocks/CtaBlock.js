const typeMap = {
  simpleCentered: 'BlocksCtaSimpleCentered',
  simpleJustified: 'BlocksCtaSimpleJustified',
}

export default {
  functional: true,

  props: {
    block: Object
  },

  render(create, { data }) {
    return create(typeMap[data.props.type], {
      key: data.props._key,
      props: {
        body: data.props.body,
        buttons: data.props.buttons
      },
    })

  },
}






