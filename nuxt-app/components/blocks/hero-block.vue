<template>

<div class='relative isolate overflow-hidden pt-header bg-slate-900'>

    <!-- Example of rendering an image -->
  <SanityVisual :image='background' sizes='100vw' expand />

  <!-- Render body text -->
  <div class='
    relative
    max-w-screen-md mx-auto px-gutter
    py-32f md:py-56f
    text-center text-white'>
    <portable-text-marketing :value='body' />
  </div>

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
