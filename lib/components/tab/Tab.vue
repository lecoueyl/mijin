<template>
  <ul
    :class="[classes, utilityClasses]"
    class="o-list c-tab"
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
    type: {
      type: String,
      default: 'inline',
      validator: (value) => [
        'block',
        'inline',
        'segmented',
        'pills',
        'border',
        'link',
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
        'o-list--block': this.type === 'border',
        'o-list--inline': this.type === 'pills',
        'c-tab--with-border': this.bordered,
        [`o-list--${this.gutter}`]: this.gutter,
        [`o-list--${this.type}`]: this.type,
        [`c-tab--${this.type}`]: this.type,
      };
    },
  },
};
</script>
