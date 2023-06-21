<template>

<SmartLink :to='btn.url' class='
  px-3.5 py-2.5
  text-sm
  font-semibold
  text-gray-900
  no-underline
  whitespace-nowrap
  rounded-md
  shadow-sm
  bg-white
  hover:bg-gray-50
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-indigo-400'>

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
