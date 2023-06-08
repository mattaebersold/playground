<!-- Custom error page -->

<template>

<div class='error-page'>
  <template v-if='!$fetchState.pending'>

    <!-- Use blocks to render page -->
    <blocks-list v-if='page' :blocks='page.blocks' />

    <!-- Or show a simple message -->
    <h1 class='style-h1' v-else>{{ message }}</h1>

  </template>
</div>

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->


<script>
// import pageMixin from '@cloak-app/craft/mixins/page'
import { getTower } from '~/queries/towerQueries';

export default {

  name: 'Error',

  props: {
    error: Object
  },

  data: function() {
		return {
			page: null,
      redirects: []
		}
	},


  // not craft, so this needs to be ported for sanity

  fetch: async function() {

    // get the tower data
    // this.page = await this.$craft.getEntry({
    //   query: getTower,
    //   variables: {
    //     uri: this.uri
    //   }
    // })

    // Fetch all of the redirects, in case
    // this page should normally client side redirect
    // if(this.$config.cloak.craft.generateRedirects) {
    //   this.redirects = await this.$craft.getEntries({
    //     query: `
    //       query getRedirects($site:[String]) {
    //         entries(site:$site, type:"redirects") {
    //           ... on redirects_redirects_Entry {
    //             from: redirectFrom
    //             to: redirectTo
    //           }
    //         }
    //       }
    //     `
    //   })
    // }

  },

  // show Sentry user input dialog if an error
  mounted: function() {
    if(this.uri == 'error') {
      this.showSentryDialog()
    }
  },

  computed: {

    uri: function() {

      switch(this.error?.statusCode) {
        case 404:
          'page-not-found';
          break;
        default:
          'error';
      }
    },

    message: function() {
      switch(this.error?.statusCode) {
        case 404:
          'Page Not Found';
          break;
        default:
          'An Error Occured';
      }
    }

  },

  methods: {

    // If the current path matches the redirect "from", then redirect
    redirectIfMatch: function() {
      let match;
      if(match = this.redirects.find(({from}) => {
        return from === this.$route.path;
      })) {
        location.href = match.to;
      }

    },

    // show sentry dialog
    // https://docs.sentry.io/enriching-error-data/user-feedback/?platform=browser
    showSentryDialog: function() {
      this.defer(() => {
        return this.$sentry?.showReportDialog();
      })
    }

  },

  watch: {
    redirects: {
      immediate: true,
      handler: function() {
        return this.redirectIfMatch();
      }
    }
  }

}

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>


</style>
