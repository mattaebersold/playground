<!-- Tower -->
<template>

<div>
  <blocks-list :blocks='page.blocks' />
</div>

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script>

import { getTower } from '~/queries/towerQueries';
import HeadMixin from '~/mixins/headMixin';

export default {

  name: 'Tower',

  mixins: [ HeadMixin ],

  asyncData: async function({ $sanity, $notFound, params, $preview }) {
    let sanityClient = $sanity

    // if preview is set, use preview client
    if ($preview) {
      sanityClient = $sanity.preview
    }
    let page = await sanityClient.fetch(getTower, {
      uri: `/${params.tower || ''}`
    });

    if(!page) { return $notFound(); }

    // set the data
    return { page };

  },

  mounted() {
    if (this.$preview && this.$preview.isRealtime) {
      this.$sanity.preview.client.listen(getTower, {
          uri: `/${this.$route.params.tower || ''}`
        })
        .subscribe((page) => {
          this.page = page.result
        })
    }
  }

}

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

</style>
