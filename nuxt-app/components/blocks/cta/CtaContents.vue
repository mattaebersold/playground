<template>

<InView animate once class='animate-[scale_.75s_.5s_both]'>

  <div class='max-w-screen-md mx-auto px-gutter'>

    <!-- Body -->
    <PortableTextMarketing v-if='body' :value='body' />

    <!-- Buttons -->
    <div v-if='buttons.length > 0' class='flex flex-wrap'>
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
    buttons: Array
  },

}
</script>
