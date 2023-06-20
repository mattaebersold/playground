<template>

<BlocksCtaContents :body='body' :buttons='buttons' />

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
