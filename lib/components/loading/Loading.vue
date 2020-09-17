<template>
  <div
    v-if="type === 'placeholder'"
    :class="[classes, utilityClasses]"
  />
  <div
    v-else
    :class="[classes, utilityClasses]"
    class="c-loading u-text-center u-p-x2"
  >
    <div class="c-loading-dot">
      <div class="c-loading-dot__item" />
      <div class="c-loading-dot__item" />
      <div class="c-loading-dot__item" />
    </div>
  </div>
</template>

<script>
import { Base } from '../..';

export default {

  name: 'BlueberryVueLoading',
  extends: Base,

  props: {
    type: {
      type: String,
      default: 'dot',
      validator: (value) => [
        'dot',
        'placeholder',
      ].indexOf(value) >= 0,
    },
  },

  computed: {
    classes() {
      return {
        [`c-loading-${this.type}`]: this.type,
      };
    },
  },
};
</script>
