<template>

<div>
  <h2>Hero block</h2>

  <!-- Render body text -->
  <sanity-content :blocks='body' />

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
