<template>
  <div
    :class="[classes, utilityClasses]"
    :style="[styles]"
    class="c-avatar"
  >
    <bb-icon
      v-if="icon"
      :name="icon"
      :size="size"
      color="white"
      class="c-avatar__icon"
    />
    <span class="u-color-white">
      <slot />
    </span>
  </div>
</template>

<script>
import { Base } from '../..';

export default {
  name: 'BlueberryVueAvatar',

  extends: Base,

  props: {
    color: {
      type: String,
      default: 'wash-medium',
    },
    picture: {
      type: String,
      default: null,
    },
    shape: {
      type: String,
      default: 'square',
      validator: (value) => [
        'square',
        'round',
      ].indexOf(value) >= 0,
    },
    size: {
      type: String,
      default: 's',
      validator: (value) => [
        'xs',
        's',
        'm',
        'l',
      ].indexOf(value) >= 0,
    },
    icon: {
      type: String,
      default: null,
    },
  },

  computed: {
    classes() {
      return {
        [`c-avatar--${this.size}`]: this.size,
        [`c-avatar--${this.shape}`]: this.shape,
        'c-avatar--with-picture': this.picture,
        'c-avatar--darken': this.picture && this.$slots.default,
        [`o-type-${this.size}`]: this.size,
        [`u-bgcolor-${this.color}`]: this.color,
      };
    },
    styles() {
      if (this.picture) {
        return {
          backgroundImage: `url("${this.picture}")`,
        };
      }
      return '';
    },
  },
};
</script>
