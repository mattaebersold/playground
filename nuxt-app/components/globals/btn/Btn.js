// import SmartLink from 'vue-routing-anchor-parser/smart-link';

const typeMap = {
  primary: 'BtnPrimary',
  secondary: 'BtnSecondary',
  text: 'BtnText',
}

export default {
  functional: true,

  render(create, { props }) {
    return create(typeMap[props.btn.type], {
      key: props.btn._key,
      props: {
        btn: props.btn,
      }
    })
  }
}
