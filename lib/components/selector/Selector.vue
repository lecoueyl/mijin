<template>
  <ul
    :class="[classes, utilityClasses]"
    class="o-list c-selector"
  >
    <slot />
  </ul>
</template>

<script>
import { Base } from '../..';

export default {
  name: 'BlueberryVueTab',
  extends: Base,

  props: {
    display: {
      type: String,
      default: 'inline',
      validator: (value) => [
        'block',
        'inline',
      ].indexOf(value) >= 0,
    },
    shape: {
      type: String,
      default: 'line',
      validator: (value) => [
        'ghost',
        'line',
        'link',
        'outline',
        'pills',
      ].indexOf(value) >= 0,
    },
    gutter: {
      type: String,
      default: null,
    },
    bordered: {
      type: Boolean,
      default: null,
    },
  },

  computed: {
    classes() {
      return {
        'c-selector--with-border': this.bordered,
        [`o-list--${this.gutter}`]: this.gutter,
        [`o-list--${this.display}`]: this.display,
        [`c-selector--${this.shape}`]: this.shape,
        [`c-selector--${this.display}`]: this.display,
      };
    },
  },
};
</script>
