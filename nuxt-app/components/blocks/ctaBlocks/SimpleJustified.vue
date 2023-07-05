<template>

<InView animate once class='animate-[scale_.75s_.5s_both]'>
  <div class="mx-auto max-w-5xl py-24 sm:py-32 px-8 lg:flex lg:items-center lg:justify-between lg:px-8">

    <!-- Body -->
    <div class="max-w-sm">
      <PortableTextMarketing
        v-if='body'
        :value='body'/>
    </div>

    <!-- CTA Buttons -->
    <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
      <BtnList :buttons='buttons' />
    </div>

  </div>
</InView>

</template>

<script>

export default {

  inheritAttrs: false,
  props: {
    body: Array,
    buttons: Array,
  },

}
</script>
