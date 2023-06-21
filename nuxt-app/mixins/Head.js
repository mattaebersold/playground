export default {

  head: function() {
    this.buildHead();
  },

  computed: {

    // get sanity settings
    settings: function() {
      return this.$store.state.settings;
    },

    seoImage: function() {
      // # A helper for accessing image values that may be part of an Array with Craft
      // img = (field) ->
      // 	field?[0]?.url or
      // 	field?.url or
      // 	if field?.length == 0 then null # For empty arrays
      // 	else field
    }

  },

  methods: {

    buildHead: function() {

      // return if there's no page, like an error page
      if(!this.page) { return }

      // title
      let title = this.page.title;

      // if there's a metaTitle, use this instead
      if(this.page.metaTitle) {
        title = this.page.metaTitle;
      }

      // if there's a meta title suffix default, append it
      if(this.settings.metaTitleSuffix) {
        title += this.settings.metaTitleSuffix;
      }

      // if no description, use the default
      let description = this.page.metaDescription;
      if(!description) {
        description = this.settings.metaDescription;
      }

      // 	image = img(@pageSeo.metaImage) or img(image) or
      // 		img(@defaultSeo.metaImage)
      // 	robots = @pageSeo.robots or @defaultSeo.robots

      // 	# Allow overwriting of canonical link
      // 	canonical = switch
      // 		when @pageSeo.canonicalUrl then @pageSeo.canonicalUrl
      // 		when canonical then canonical
      // 		when process.env.URL then process.env.URL + @$route.path


      // return the head object
      return {
        title: title
      }

      // 	# Create the object, filtering empties
      // 	title: title
      // 	link: if canonical then [
      // 		hid: 'canonical'
      // 		rel: 'canonical'
      // 		href: canonical
      // 	]
      // 	meta: [
      // 		@$metaTag 'og:title', title
      // 		@$metaTag 'description', description
      // 		@$metaTag 'og:image', image
      // 		@$metaTag 'robots', robots?.join ', '
      // 	].filter (tag) -> !!tag?.content


    }

  }

}


