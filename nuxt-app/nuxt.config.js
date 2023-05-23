export default {

	modules: [

		// Cloak modules
		'@cloak-app/boilerplate',
		'@cloak-app/visual',

		// Other modules
	],

	// Cloak settings
	cloak: {
		boilerplate: {
			siteName: 'nuxt-sanity-demo',
			// polyfills: ['default']
		},
	},


	// Always show logs (doesn't work from within module)
	build: { quiet: false },

}
