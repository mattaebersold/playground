<template>

<div class='max-w-screen-md
  mx-auto
  px-gutter
  text-center'>
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
