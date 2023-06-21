<template>

<BtnParent :btn='btn' :margins='margins'>
  <span class='
    text-sm
    font-semibold
    leading-6
    no-underline
    whitespace-nowrap'>
    {{ btn.text }}
  </span>
</BtnParent>

</template>

<script>

export default {

  inheritAttrs: false,
  props: {
    btn: Object,
    margins: {
      type: Boolean,
      default: false
    }
  }

}


</script>


