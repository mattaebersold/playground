<!-- Standard Block renderer -->

<template lang='pug'>

.tower
	h1 Hey there

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
# import pageMixin from '@cloak-app/craft/mixins/page'

export default
	name: 'Tower'

	# mixins: [ pageMixin ]

	# Get Tower data
	# asyncData: ({ $craft, $notFound, params }) ->

	# 	# Get data
	# 	page = await $craft.getEntry
	# 		query: getTower
	# 		variables: uri: params.tower || '__home__'
	# 	return $notFound() unless page

	# 	# Set data
	# 	return { page }

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

</style>
