<template>
  <div
    :class="[classes, utilityClasses]"
    class="o-media c-popover__select"
  >
    <div class="o-media__fixed c-popover__toggle">
      <bb-icon
        v-if="active"
        align-text
        name="check"
      />
    </div>
    <div class="o-media__fluid">
      <slot />
    </div>
  </div>
</template>

<script>
import { Base } from '../..';

export default {

  name: 'BlueberryVuePopoverSelect',
  extends: Base,

  props: {
    active: {
      type: Boolean,
      default: null,
    },
  },

  computed: {
    classes() {
      return {
        'c-popover__select--is-active': this.active,
      };
    },
  },
};
</script>
