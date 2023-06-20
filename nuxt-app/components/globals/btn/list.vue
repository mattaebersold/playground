<template>

<div class='flex flex-wrap'>
  <Btn
    class='mx-6'
    v-for='btn, index in buttons'
    :key='index'
    :to='btn.url'>{{ btn.cta }}</Btn>
</div>

</template>

<script>
export default {

  inheritAttrs: false,
  props: {
    buttons: Array
  },

}
</script>
