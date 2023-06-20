<template>

<InView animate once class='animate-[scale_.75s_.5s_both]'>

  <PortableTextMarketing v-if='body' :value='body' />

  <!-- Buttons -->
  <div class='flex flex-wrap'>
    <BtnList :buttons='buttons' />
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
