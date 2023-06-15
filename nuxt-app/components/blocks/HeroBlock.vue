<template>

<div class='relative isolate overflow-hidden pt-header bg-slate-900'>

  <in-view animate once class='animate-[scale_.75s_0s_both] absolute w-full h-full top-0'>
    <SanityVisual :image='background' sizes='100vw' expand class='absolute inset-0' />
  </in-view>


  <!-- Render body text -->
  <in-view animate once class='animate-[scale_.75s_.3s_both]'>
    <div class='
      relative
      max-w-screen-md mx-auto px-gutter
      py-32f md:py-56f
      text-center text-white'>
      <portable-text-marketing :value='body' />
    </div>
  </in-view>

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
