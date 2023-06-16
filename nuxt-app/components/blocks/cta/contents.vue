<template>

<div>

  <in-view animate once class='animate-[scale_.75s_.5s_both]'>
    <div slot>
      <h2>CTA Block</h2>
    </div>
  </in-view>

  <in-view
    animate once
    v-if='body'
    class='animate-[scale_.75s_1s_both]'>
    <portable-text-marketing slot :value='body' />
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
