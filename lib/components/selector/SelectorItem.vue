<template>
  <router-link
    v-if="to"
    :to="to"
    :exact="exact"
    :class="[classes, utilityClasses]"
    class="o-list__item c-selector__item"
    tag="li"
    active-class="c-selector__item--is-active"
  >
    <slot />
  </router-link>
  <li
    v-else
    :class="[classes, utilityClasses]"
    class="o-list__item c-selector__item"
    v-on="$listeners"
  >
    <slot />
  </li>
</template>

<script>
import { Base } from '../..';

export default {
  name: 'BlueberryVueTabItem',
  extends: Base,

  props: {
    active: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [Object, String],
      default: null,
    },
    exact: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        'c-selector__item--is-active': this.active,
      };
    },
  },
};
</script>
