<template>
  <picture
    :class="[utilityClasses]"
    class="c-picture"
  >
    <slot />
  </picture>
</template>

<script>
import { Base } from '../..';

export default {

  name: 'BlueberryVuePicture',
  extends: Base,

  props: {
    image: {
      type: String,
      default: null,
    },
  },
};
</script>
