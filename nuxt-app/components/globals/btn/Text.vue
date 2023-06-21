<template>

<SmartLink :to='btn.url' class='
  text-sm
  font-semibold
  leading-6
  no-underline
  whitespace-nowrap'>

  {{ btn.text }}
</SmartLink>

</template>

<script>
import SmartLink from 'vue-routing-anchor-parser/smart-link'

export default {

  components: { SmartLink },

  inheritAttrs: false,
  props: {
    btn: Object
  },

}

</script>
