<template>

<div>

  <in-view animate once class='animate-[scale_.75s_.5s_both]'>
    <h2>CTA Block</h2>
  </in-view>

  <in-view animate once class='animate-[scale_.75s_1s_both]'>
    <portable-text-marketing :value='body' />
  </in-view>

</div>

</template>

<script>
export default {

  inheritAttrs: false,
  props: {
    body: Array,
  },

}
</script>
