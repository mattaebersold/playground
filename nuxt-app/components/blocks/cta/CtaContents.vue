<template>

<InView animate once class='animate-[scale_.75s_.5s_both]'>

  <div :class='classes'>

    <!-- Body -->
    <PortableTextMarketing v-if='body' :value='body' />

    <!-- Buttons -->
    <div :class='btnClasses'>
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
    alignment: String
  },

  computed: {

    // text container classes
    classes: function() {
      let classes = ['max-w-screen-md', 'mx-auto', 'px-gutter'];

      if(this.alignment == 'centered') {
        classes.push('text-center');
      }

      return classes;
    },

    // button container classes
    btnClasses: function() {
      let classes = ['flex', 'flex-wrap', 'align-center', 'mt-12'];

      if(this.alignment == 'centered') {
        classes.push('justify-center');
      }

      return classes;
    }
  }

}
</script>
