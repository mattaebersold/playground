<template>

<BlocksCtaContents
  :body='body'
  :buttons='buttons'
  alignment='centered' />

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
