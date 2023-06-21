<template>

<div class='relative isolate overflow-hidden pt-header bg-slate-900'>

  <!-- Background Image -->
  <InView
    animate once
    v-if='background'
    class='absolute
      w-full h-full top-0
      animate-[scale_.75s_0s_both]'>
    <SanityVisual :image='background' sizes='100vw' expand class='absolute inset-0' />
  </InView>

  <!-- Leaving the markup here, because right now the hero is the only block to use this -->

  <!-- Upper Left Dodge Effect -->
  <div class='absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80' aria-hidden='true'>
    <div class='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
      style="clipPath:'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'">
    </div>
  </div>

  <!-- Bottom Right Dodge Effect -->
  <div class='absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]' aria-hidden='true'>
    <div class='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
      style="clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'">
    </div>
  </div>

  <!-- Container around the body -->
  <div class="
    relative
    max-w-screen-md mx-auto px-gutter
    py-32f md:py-56f
    text-center text-white">


    <!-- Animate cta button -->
    <InView animate once v-if='announcementButton.text' class='animate-[scale_.75s_.3s_both]'>
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">

          <!-- the text -->
          <span>{{ announcementButton.text }}</span>

          <!-- the link -->
          <SmartLink
            :href="announcementButton.text"
            class="font-semibold text-white">
            <span class="absolute inset-0" aria-hidden="true" />
            <span>{{ announcementButton.cta }}</span>

            <!-- <Icon type={ ButtonIcon.RightArrow } /> -->

          </SmartLink>

        </div>
      </div>
    </InView>


    <!-- Animate the body -->
    <InView animate once v-if='body' class='animate-[scale_.75s_.3s_both]'>
      <PortableTextMarketing :value='body' />
    </InView>

  </div>
</div>

</template>

<script>
import SmartLink from 'vue-routing-anchor-parser/smart-link'

export default {

  components: { SmartLink },

  inheritAttrs: false,
  props: {
    body: Array,
    announcementButton: Object,
    background: Object,
  },

}
</script>
