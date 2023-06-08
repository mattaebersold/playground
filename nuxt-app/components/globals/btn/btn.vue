<!-- Standard pill button -->
<script>
import SmartLink from 'vue-routing-anchor-parser/smart-link';

export default {

  props: {

    // URL to link to
    to: String,

    // Size of the button
    size: {
      type: String,
      validator: function(val) {
        return val === 'small';
      }
    },

    type: {
      type: String,
      default: 'button',
      validator: function(val) {
        return val === 'button' || val === 'submit' || val === 'reset';
      }
    },

    loading: Boolean,
    disabled: Boolean

  },

  computed: {

    classes: function() {
      return [
        this.size ? `size-${this.size}` : null,
        {
          loading: this.loading
        }
      ];
    },

    nonInteractive: function() {
      if(this.disabled || this.loading) { return true; }
      else { return false; }
    }

  },

  methods: {

    // Prevent clicking if non-interactive
    onClick: function(e) {
      if(this.nonInteractive) { e.preventDefault(); }
      else {
        this.$emit('click');
      }
    },

    // Conditionally change the root button type
    render: function(create) {

      let data = {
        class: ['btn', ...this.classes],
        domProps: {
          disabled: this.nonInteractive
        },
        on: {
          click: this.onClick
        }
      };

      // The contents of the button
      let children = [
        create('span',
        {
          class: 'shape'
        }),
        create('span',
        {
          class: 'slot'
        },
        this.$nonEmpty([
          this.$slots.default,
          this.loading ? create('span',
          {
            class: 'icon-spinner'
          }) : void 0
        ]))
      ];


      if (this.to) {
        create(SmartLink, {
          ...data,
          attrs: {
            ...data.attrs,
            role: 'button'
          },
          props: {to: this.to}
        }, children);
      } else {
        // Render an html button
        create('button', {
          ...data,
          domProps: {...data.domProps, type: this.type}
        }, children);
      }

    }
  }
}


</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

.btn

  // Set height
  position relative
  +tablet-up()
    height btn-desktop-h
  +tablet-down()
    height btn-mobile-h
    &.size-small
      height btn-small-h

  // Center contents
  display inline-flex
  align-items center
  justify-content center

  // Clear possibly inheritted underline
  text-decoration none

  // Disable cursor when disabled
  &[disabled]
    cursor default

  // Add hover/active effects
  &:not([disabled])
    +hover(true)
      .shape
        background primary-color-dark
        transition-duration .2s
    +active()
      .shape
        transform scaleX(0.925)

    // Add custom focus state
    .js-focus-visible &.focus-visible:focus
      outline none
      .shape
        box-shadow inset 0 0 0 2px lighten(primary-color, 10%)
        transition-duration .1s

  // Prevent content from spilling out
  overflow hidden

  // Typography
  color white
  fluid font-size, body-font-size, body-font-size-min

  // Disabled state
  &[disabled]
    color darken(disabled-fill, 20%)
    .shape
      background-color disabled-fill

// Make backgound state
.shape
  expand()
  background-color primary-color
  transition background .4s, transform .1s, box-shadow .2s
  +tablet-up()
    border-radius btn-desktop-h * 0.5
  +tablet-down()
    border-radius btn-mobile-h * 0.5
    &.size-small
      height btn-small-h * 0.5

.slot

  // Align slotted stuff
  flex-center()

  // Overlap the shape
  position relative

  // Push edges away
  fluid padding-h, btn-pad-h, btn-pad-h-min
  .size-small &
    fluid padding-h, btn-pad-h, btn-pad-h-small

.icon-spinner
  margin-left 7px
  font-size 0.8em
  animation spin 0.5s linear infinite

  // Transition effects
  &.v-enter-active, &.v-leave-active
    transition opacity 0.1s
  &.v-enter, &.v-leave-to
    opacity 0


</style>
