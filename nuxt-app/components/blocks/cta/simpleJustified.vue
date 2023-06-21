<template>

<BlocksCtaContents
  :body='body'
  :buttons='buttons'
  alignment='justified' />

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
