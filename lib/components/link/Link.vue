<template>
  <router-link
    v-if="to"
    :target="target"
    :to="to"
    :exact="exact"
    :active-class="activeClass"
    :class="[classes, utilityClasses]"
    class="c-link"
  >
    <bb-icon
      v-if="icon"
      align-text
      :name="icon"
      :size="iconSize"
      class="c-link__icon"
    />
    <slot />
  </router-link>
  <a
    v-else
    :href="href"
    :target="target"
    :class="[classes, utilityClasses]"
    class="c-link"
    v-on="$listeners"
  >
    <bb-icon
      v-if="icon"
      align-text
      :name="icon"
      :size="iconSize"
      class="c-link__icon"
    />
    <slot />
  </a>
</template>

<script>
import { Base } from '../..';

export default {

  name: 'BlueberryVueLink',
  extends: Base,

  props: {
    color: {
      type: String,
      default: 'default',
    },
    href: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: null,
    },
    to: {
      type: [Object, String],
      default: null,
    },
    activeClass: {
      type: String,
      default: null,
    },
    exact: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
    iconSize: {
      type: String,
      default: 's',
      validator: (value) => [
        's',
        'm',
      ].indexOf(value) >= 0,
    },
  },

  computed: {
    classes() {
      return {
        [`c-link--${this.color}`]: this.color,
        'u-inline-block': this.icon,
      };
    },
  },
};
</script>
