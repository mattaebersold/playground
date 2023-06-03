import { fluid, makeFluidSpacingDefaults } from './packages/style-utils'

module.exports = {

  theme: {

    extend: {

      spacing: {

        // Adds "f" suffixed space values for the default scale.  Use like:
        // `py-8f`.
        ...makeFluidSpacingDefaults(),

        // Add spacing values that are used by BlockLayout
        xs: fluid(32),
        sm: fluid(48, 32),
        md: fluid(64, 48),
        lg: fluid(128, 64),

        // Add gutter values
        gutter: fluid(40, 16),

        // The header height
        header: fluid(80, 60),

      }
    }
  }
}
