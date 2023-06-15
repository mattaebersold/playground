<template>

<div>

  <!-- centered -->
  <div v-if='type == "simpleCentered"' class='max-w-screen-md
    mx-auto
    px-gutter
    text-center'>
    <cta-contents :body='body' />
  </div>

  <!-- justified -->
  <div v-if='type == "simpleJustified"' class='max-w-screen-xl
      mx-auto px-gutter
      md:flex
      md:items-center
      md:justify-between'>
    <cta-contents :body='body' />
  </div>

</div>

</template>

<script>
import CtaContents from './cta/contents';

export default {

  components: { CtaContents },

  inheritAttrs: false,
  props: {
    body: Array,
    type: String,
    buttons: Array,
  },

}
</script>
