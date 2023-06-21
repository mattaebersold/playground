<template>

<!-- container spacing classes -->
<div :class='classes'>

  <!-- smart link if url -->
  <SmartLink v-if='btn.url' :to='btn.url' class='no-underline'>
    <slot />
  </SmartLink>

  <!-- button tag if no URL -->
  <button v-else>
    <slot />
  </button>

</div>

</template>

<script>
import SmartLink from 'vue-routing-anchor-parser/smart-link'

export default {

  components: { SmartLink },

  inheritAttrs: false,
  props: {
    btn: Object,
    margins: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes: function() {
      let classes = [];
      if(this.margins) {
        classes.push('m-2');
      }

      return classes;
    }
  }

}


</script>


