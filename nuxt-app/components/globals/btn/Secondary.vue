<template>

<BtnParent :btn='btn' :margins='margins'>
  <span class='
    px-3.5 py-2.5
    text-sm
    font-semibold
    text-gray-900
    no-underline
    whitespace-nowrap
    rounded-md
    shadow-sm
    bg-white
    hover:bg-gray-50
    focus-visible:outline
    focus-visible:outline-2
    focus-visible:outline-offset-2
    focus-visible:outline-indigo-400'>
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


