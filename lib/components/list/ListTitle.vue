<template>
  <li
    :class="[classes, utilityClasses]"
    class="c-list__title u-color-wash-medium u-mb-half u-pb-half o-type-xs"
  >
    <div class="o-media o-media--bottom">
      <slot />
      <div
        v-if="expanded"
        class="c-list__item-icon-container"
      />
    </div>
  </li>
</template>

<script>
import { Base } from '../..';

export default {

  name: 'BlueberryVueListTitle',
  extends: Base,

  props: {
    expanded: {
      type: Boolean,
      default: null,
    },

    sticky: {
      type: Boolean,
      default: null,
    },
  },

  data() {
    return {
      isListColumn: true, // used by parent
    };
  },

  computed: {
    classes() {
      return {
        'c-list__title--is-sticky': this.sticky,
      };
    },
  },
};
</script>
