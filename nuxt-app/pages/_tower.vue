<!-- Standard Block renderer -->

<template>

<div>
  <blocks-list :blocks='page.blocks' />
</div>

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
# import pageMixin from '@cloak-app/craft/mixins/page'
import { getTower } from '~/queries/towerQueries'

export default
  name: 'Tower'

  # mixins: [ pageMixin ]

  # Get Tower data
  asyncData: ({ $sanity, $notFound, params }) ->

    # Get data
    page = await $sanity.fetch getTower, uri: "/#{params.tower || ''}"
    return $notFound() unless page

    # Set data
    return { page }

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

</style>
