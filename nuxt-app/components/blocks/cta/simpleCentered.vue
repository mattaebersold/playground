<template>

<div class='text-center'>
  <BlocksCtaContents :body='body' :buttons='buttons' />
</div>

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
