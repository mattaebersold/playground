<!-- General layout -->
<template>

<div class='
  default-layout
  bg-indigo-100
  text-indigo-900t'>

  <a class='skip-content' href='#mail'>Skip to main content</a>

  <!-- Page Content -->
  <main id='main'>
    <nuxt class='page'>
      <layout-footer />
    </nuxt>
  </main>

</div>

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script>

export default {
  name: 'DefaultLayout'
}

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

// Prevent mega-wide pages
.default-layout
  max-width max-w-full
  margin-h auto
  width 100%

// On short pages, pin the footer to the bottom of the page
main
  min-height 100vh
  display flex
  flex-direction column
.page
  flex-grow 1

.skip-content
  position absolute
  left -1000px
  z-index header-z // stacked below nav but above page content

  // adjust spacing when header changes
  +when-desktop-header()
    top (header-h + spacing-s)
  +when-mobile-header()
    top (header-h-mobile + spacing-s-min)

  &:focus
    fluid left, gutter, gutter-mobile
    outline none

</style>
