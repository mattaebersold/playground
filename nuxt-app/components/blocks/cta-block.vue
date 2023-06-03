<template>

<div>
  <h2>CTA Block</h2>

  <!-- Render body text -->
  <sanity-content :blocks='body' />

</div>

</template>

<script>
export default {

  inheritAttrs: false,
  props: {
    body: Array,
    type: String,
    buttons: Array,
  },

}
</script>
