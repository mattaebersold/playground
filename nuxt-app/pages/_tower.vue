<!-- Tower -->
<template>

<div>
  <blocks-list :blocks='page.blocks' />
</div>

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script>

import { getTower } from '~/queries/towerQueries';
import HeadMixin from '~/mixins/Head';

export default {

  name: 'Tower',

  mixins: [ HeadMixin ],

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
