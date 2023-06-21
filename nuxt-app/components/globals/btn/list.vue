<template>

<div class='flex flex-wrap items-center'>
  <Btn
    v-for='btn, index in buttons'
    :key='index'
    :btn='btn' />
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
