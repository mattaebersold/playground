export default {

  head: function() {
    return this.buildHead();
  },

  computed: {

    // shorthand for sanity settings
    settings: function() {
      return this.$store.state.settings;
    }

  },

  methods: {

    createMetaTag: function(tagName, content) {
      return {
        tagName: tagName,
        content: content
      };
    },

    buildHead: function() {

      // return if there's no page, like an error page
      if(!this.page) { return }

      // title
      // if there's a metaTitle, use this instead
      // if there's a meta title suffix default, append it
      let title = this.page.title;
      if(this.page.metaTitle) {
        title = this.page.metaTitle;
      }
      if(this.settings.metaTitleSuffix) {
        title += ` ${this.settings.metaTitleSuffix}`;
      }

      // if no description, use the default
      let description = this.page.metaDescription;
      if(!description) {
        description = this.settings.metaDescription;
      }

      // use tower's meta image. If none, then
      // use the default meta image from settings
      let image = this.page.seoImage;
      if(!image) {
        image = this.settings.metaImage;
      }

      // Robots
      let robots = this.page.robots;

      // return the head object
      return {
        title: title,
        meta: [
          this.createMetaTag('og:title', title),
          this.createMetaTag('description', description),
          this.createMetaTag('og:image', image),
          this.createMetaTag('robots', robots?.join(', '))
        ].filter(function(tag) {
          return !!tag?.content;
        })
      }
    }
  }
}
