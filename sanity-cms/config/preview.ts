export const getProductionBaseUrl = () => {
  const hostname = window.location.hostname
  switch (hostname) {
    case 'localhost':
      return 'http://localhost:3000'
    default:
      // Todo: Change when we have a production URL
      return `https://bukwild-nuxt-sanity-demo.netlify.app`
  }

}

export const getPreviewUrl = (slug: string): string => {
  const baseUrl = getProductionBaseUrl()
  return `${baseUrl}${slug}?preview=true`
}
