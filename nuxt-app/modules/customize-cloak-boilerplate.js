// Customize deep options set by @cloak-app/boilderplate that don't have
// explicit flags
export default function() {

  // Remove normalize.css (we'll use Tailwind's version instead)
  this.options.css = this.options.css.filter(name => {
    return !name.includes('normalize')
  })

}
