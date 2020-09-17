<template>
  <component
    :is="tagName"
    :class="[`u-pv-${paddingVertical}`, `u-ph-${paddingHorizontal}`, utilityClasses]"
    class="u-bgcolor-wash-thin u-bdradius-m u-boxshadow-l"
  >
    <slot />
  </component>
</template>

<script>
import { Base } from '../..';

export default {
  name: 'BlueberryVueBlock',
  extends: Base,

  props: {
    tagName: {
      type: String,
      default: 'section',
    },

    paddingVertical: {
      type: String,
      default: 'x4',
    },

    paddingHorizontal: {
      type: String,
      default: 'x4',
    },
  },
};
</script>
