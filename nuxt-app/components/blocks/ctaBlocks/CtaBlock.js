const typeMap = {
  simpleCentered: 'BlocksCtaSimpleCentered',
  simpleJustified: 'BlocksCtaSimpleJustified',
}

export default {
  functional: true,

  render(create, { props }) {
    return create(typeMap[props.type], {
      key: props._key,
      props: {
        body: props.body,
        buttons: props.buttons
      },
    })

  },
}






