<template>

<SmartLink :to='btn.url' class='
  px-3.5 py-2.5
  text-sm
  font-semibold
  text-white
  no-underline
  whitespace-nowrap
  rounded-md
  shadow-sm
  bg-indigo-500
  hover:bg-indigo-400
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-indigo-400'>

  {{ btn.text }}
</SmartLink>

</template>

<script>
import SmartLink from 'vue-routing-anchor-parser/smart-link'

export default {

  components: { SmartLink },

  inheritAttrs: false,
  props: {
    btn: Object
  },

  // props: {

  //   // URL to link to
  //   to: String,

  //   // Size of the button
  //   size: {
  //     type: String,
  //     validator: function (val) {
  //       return val === 'small';
  //     }
  //   },

  //   type: {
  //     type: String,
  //     default: 'button',
  //     validator: function (val) {
  //       return val === 'button' || val === 'submit' || val === 'reset';
  //     }
  //   },

  //   loading: Boolean,
  //   disabled: Boolean

  // },

  // computed: {

  //   classes: function () {
  //     return [
  //       this.size ? `size-${this.size}` : null,
  //       {
  //         loading: this.loading
  //       }
  //     ];
  //   },

  //   nonInteractive: function () {
  //     if (this.disabled || this.loading) { return true; }
  //     else { return false; }
  //   }

  // }

  //   methods: {

  //     // Prevent clicking if non-interactive
  //     onClick: function (e) {
  //       if (this.nonInteractive) { e.preventDefault(); }
  //       else {
  //         this.$emit('click');
  //       }
  //     }
  //   },

  //   // Conditionally change the root button type
  //   render: function (create) {


  //     let data = {
  //       class: ['btn', ...this.classes],
  //       domProps: {
  //         disabled: this.nonInteractive
  //       },
  //       on: {
  //         click: this.onClick
  //       }
  //     };

  //     // The contents of the button
  //     let children = [
  //       create('span',
  //         {
  //           class: 'shape'
  //         }),
  //       create('span',
  //         {
  //           class: 'slot'
  //         },
  //         this.$nonEmpty([
  //           this.$slots.default,
  //           this.loading ? create('span',
  //             {
  //               class: 'icon-spinner'
  //             }) : void 0
  //         ]))
  //     ];

  //     if (this.to) {
  //       return create(SmartLink, {
  //         ...data,
  //         attrs: {
  //           ...data.attrs,
  //           role: 'button'
  //         },
  //         props: { to: this.to }
  //       }, children);
  //     } else {
  //       // Render an html button
  //       return create('button', {
  //         ...data,
  //         domProps: { ...data.domProps, type: this.type }
  //       }, children);
  //     }

  //   }
  // }

}


</script>


