<template>

<div class='flex flex-wrap' :class='classes'>
  <Btn v-for='btn in buttons'
    :key='btn.id'
    :btn='btn'
    margins />
</div>

</template>

<script>
export default {

  inheritAttrs: false,
  props: {
    buttons: Array,
    alignment: String
  },

  computed: {
    classes: function() {
      let classes = ['flex', 'flex-wrap'];
      if(this.alignment == 'centered') {
        classes.push('justify-center');
      }

      return classes;
    }
  }

}
</script>
