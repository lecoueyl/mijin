<template>
  <component
    :is="transitionType"
    :mode="mode"
    :tag="tag"
    enter-active-class="transition-opacity ease-out-mijin duration-700"
    :leave-active-class="flip && group
      ? 'transition-opacity ease-out-mijin duration-300 absolute'
      : 'transition-opacity ease-out-mijin duration-300'"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
    move-class="ease-in-out-mijin duration-200"
    :class="[
      {
        'relative': flip && group,
      }
    ]"
  >
    <slot />
  </component>
</template>

<script>
import mixins from './mixins';

export default {
  mixins: [mixins],
};
</script>
