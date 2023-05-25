import consola from 'consola'
import defaultsDeep from 'lodash/defaultsDeep'
import { groq } from '@nuxtjs/sanity'
import { createClient } from '@nuxtjs/sanity'

/**
 * Module that added dynamic pages (like towers) to the generated routes
 */
export default function() {

  // Create noindex property in sitemap options in case this loads first
  defaultsDeep(this.options, { sitemap: { routes: [] }})

  // Hook in to Nuxt
  this.nuxt.hook('generate:extendRoutes', extendRoutes.bind(this))
}

// Add routes, mutatating the passed in array
async function extendRoutes(routes) {

  // Make a consola scope
  const log = consola.withTag('@cloak-app/sanity')

  // Make Sanity client (since we can't use $sanity from a module) using the
  // config options from Nuxt config
  const $sanity = createClient(this.options.sanity)

  // Log starting
  const pageTypes = this.options.cloak.sanity.pageTypes
  if (!pageTypes.length) return
  log.info(`Adding SSG routes for ${pageTypes.length} pageTypes`)

  // Get an array of URIs and robots rules of all pages to be generated
  const docs = await $sanity.fetch(groq`
    *[_type in $pageTypes && defined(uri)]{
      'uri': uri.current,
      robots,
    }
  `, { pageTypes })

  // Loop through the entries
  docs.forEach(doc => {

    // Add routes to the list that should be generated
    const route = doc.uri
    routes.push({ route })

    // Add routes without noindex to @nuxtjs/sitemap
    if (!(doc.robots || []).includes('noindex')) {
      this.options.sitemap.routes.push(route)
    }
  })

  // All done
  log.info(`Added SSG routes`)
}
