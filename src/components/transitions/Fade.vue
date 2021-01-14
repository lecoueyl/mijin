<template>
  <Component
    :is="transitionType"
    :mode="mode"
    :tag="tag"
    enter-active-class="transition-opacity ease-in duration-200"
    leave-active-class="transition-opacity ease-out duration-200"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
    move-class="ease-in-out duration-200"
  >
    <slot />
  </Component>
</template>

<script>
import mixins from './mixins';

export default {
  mixins: [mixins],
};
</script>
