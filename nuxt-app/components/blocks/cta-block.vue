<template>

<div>

  <!-- Render body text -->
  <div class='max-w-screen-md mx-auto px-gutter'>
    <h2>CTA Block</h2>
    <sanity-content :blocks='body' />
  </div>

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
