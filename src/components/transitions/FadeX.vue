<template>
  <Component
    :is="transitionType"
    :mode="mode"
    :tag="tag"
    enter-active-class="transition ease-out-mijin duration-500"
    :leave-active-class="flip && group
      ? 'transition ease-out-mijin duration-500 absolute'
      : 'transition ease-out-mijin duration-500'"
    enter-class="transform translate-x-2 opacity-0"
    enter-to-class="transform translate-x-0 opacity-100"
    leave-class="transform translate-x-0 opacity-100"
    leave-to-class="transform translate-x-2 opacity-0"
    move-class="ease-in-out duration-500"
    :class="[
      {
        'relative': flip && group,
      }
    ]"
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
