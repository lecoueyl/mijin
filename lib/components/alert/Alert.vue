<template>
  <div
    :class="[classes, utilityClasses]"
    class="u-inline-block"
  >
    <div class="u-flex">
      <div class="o-type-s">
        <bb-icon
          :name="icon"
          align-text
        />
      </div>

      <bb-p u-pl>
        <slot />
      </bb-p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlueberryVueAlert',

  // extends: Base,

  // props: {
  //   status: {
  //     type: String,
  //     default: 'success',
  //     validator: (value) => [
  //       'success',
  //       'warning',
  //       'error',
  //     ].indexOf(value) >= 0,
  //   },
  //   bordered: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },

  // computed: {
  //   classes() {
  //     return {
  //       'u-color-green': this.status === 'success',
  //       'u-color-orange': this.status === 'warning',
  //       'u-color-red': this.status === 'error',
  //       'u-bd-green u-bdradius u-p': this.bordered && this.status === 'success',
  //       'u-bd-orange u-bdradius u-p': this.bordered && this.status === 'warning',
  //       'u-bd-red u-bdradius u-p': this.bordered && this.status === 'error',
  //     };
  //   },

  //   icon() {
  //     switch (this.status) {
  //       case 'error':
  //         return 'error';
  //       case 'warning':
  //         return 'alertTriangle';
  //       default:
  //         return 'valid';
  //     }
  //   },
  // },
};
</script>
