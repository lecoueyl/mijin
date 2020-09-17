<template>
  <code
    v-if="type ==='code'"
    :class="[classes, utilityClasses, tagClasses]"
    class="c-tag"
  >
    <slot />
  </code>
  <span
    v-else
    :class="[tagClasses, classes, utilityClasses]"
    class="c-tag"
  >
    <slot />
  </span>
</template>

<script>
import { Base } from '../..';
import sizeable from '../../utils/mixinSizeable';

export default {
  name: 'BlueberryVueTag',

  mixins: [
    Base,
    sizeable,
  ],

  props: {
    color: {
      type: String,
      default: 'foreground',
    },

    type: {
      default: 'outline',
      type: String,
      validator: (value) => [
        'outline',
        'fill',
        'code',
      ].indexOf(value) >= 0,
    },
  },

  computed: {
    tagClasses() {
      return {
        [`u-color-${this.color}`]: this.color && this.type === 'outline',
        'u-color-white': this.type === 'fill',
        [`u-bgcolor-${this.color}`]: this.color && this.type === 'fill' && this.color !== 'foreground',
        'u-bgcolor-wash-light': this.color && this.type === 'fill' && this.color === 'foreground',
        'c-tag--code u-color-purple u-bgcolor-wash-thin': this.type === 'code',
        [`u-bd-${this.color}`]: this.color && this.type === 'outline',
      };
    },
  },
};
</script>
