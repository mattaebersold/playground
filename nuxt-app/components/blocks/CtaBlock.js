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

    console.log(typeMap[data.props.type]);

    create(typeMap[data.props.type], {
      key: data.props._key,
      props: {
        body: data.props.body,
        buttons: data.props.buttons
      },
    })

  },
}






