<template>

<InView animate once class='animate-[scale_.75s_.5s_both]'>

  <div class='max-w-screen-md mx-auto px-gutter text-center'>

    <!-- Body -->
    <PortableTextMarketing
      v-if='body'
      :value='body'
      alignment='centered' />

    <!-- Buttons -->
    <div class='flex flex-wrap align-center mt-12 justify-center'>
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
