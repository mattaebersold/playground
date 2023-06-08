<!-- Tower -->
<template>

<div>
  <blocks-list :blocks='page.blocks' />
</div>

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script>

// import pageMixin from '@cloak-app/craft/mixins/page'
import { getTower } from '~/queries/towerQueries';

export default {

  name: 'Tower',

  asyncData: async function({ $sanity, $notFound, params }) {

    let page = await $sanity.fetch(getTower, {
      uri: `/${params.tower || ''}`
    });

    if(!page) { return $notFound(); }

    // set the data
    return { page };

  }

}

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

</style>
