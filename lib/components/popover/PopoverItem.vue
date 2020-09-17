<template>
  <router-link
    v-if="to"
    :target="target"
    :to="to"
    :exact="exact"
    :active-class="activeClass"
    :class="[classes, utilityClasses]"
    class="c-popover__item"
  >
    <bb-icon
      v-if="icon"
      align-text
      :name="icon"
      size="s"
      u-mr="half"
    />
    <slot />
  </router-link>

  <a
    v-else
    :href="href"
    :target="target"
    :class="[classes, utilityClasses]"
    class="c-popover__item"
    v-on="$listeners"
  >
    <bb-icon
      v-if="icon"
      align-text
      :name="icon"
      size="s"
      u-mr="half"
    />
    <slot />
  </a>
</template>

<script>
import { Base } from '../..';

export default {

  name: 'BlueberryVuePopoverItem',
  extends: Base,

  props: {
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
    color: {
      type: String,
      default: 'default',
    },
    icon: {
      type: String,
      default: null,
    },
  },

  computed: {
    classes() {
      return {
        [`c-popover__item--${this.color}`]: this.color,
      };
    },
  },
};
</script>
