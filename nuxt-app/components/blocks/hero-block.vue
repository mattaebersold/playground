<template>

<div>

  <!-- Render body text -->
  <div class='max-w-screen-md mx-auto px-gutter'>
    <h2>Hero block</h2>
    <portable-text-marketing :value='body' />
  </div>

  <!-- Example of rendering an image -->
  <SanityVisual :image='background' />

</div>

</template>

<script>
export default {

  inheritAttrs: false,
  props: {
    body: Array,
    announcementButton: Object,
    background: Object,
  },

}
</script>
