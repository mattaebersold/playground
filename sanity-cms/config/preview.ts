
const netlifyPreviewHostname = 'bukwild-nuxt-sanity-demo-cms.netlify.app'

export const getProductionBaseUrl = () => {
  const hostname = window.location.hostname

  if (hostname === 'localhost') {
    return 'http://localhost:3000'
  }

  // Check if we're on a Netlify preview URL
  else if (hostname.indexOf(`--${netlifyPreviewHostname}`) > -1) {
    const deployPreviewId = hostname.match(
      /(.*)(?=--bukwild-nuxt-sanity-demo-cms.netlify.app)/,
    )
    if (deployPreviewId && deployPreviewId.length > 0) {
      return `https://${deployPreviewId[0]}--bukwild-nuxt-sanity-demo.netlify.app`
    }
  }
  else {
    return `https://bukwild-nuxt-sanity-demo.netlify.app`
  }

}

export const getPreviewUrl = (slug: string): string => {
  const baseUrl = getProductionBaseUrl()
  return `${baseUrl}${slug}?preview=true`
}
