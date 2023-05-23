<!-- Desktop header -->

<template lang='pug'>

detachable-header.layout-header-desktop(:height='height')
	header.max-w-full: .columns.max-w-m
		.left
			//- Left aligned links

		.center
			nuxt-link(to='/') nuxt-sanity-demo

		.right
			//- Right aligned links

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
import DetachableHeader from 'vue-detachable-header'
import 'vue-detachable-header/index.css'
import dimensions from '~/assets/vars/dimensions'
export default

	components: { DetachableHeader }

	data: -> height: parseInt dimensions['header-h']

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style src='./header.styl' lang='stylus' scoped></style>
<style lang='stylus' scoped>

// hide on mobile
.layout-header-desktop
	+when-mobile-header()
		display none

</style>
