<template>
  <component
    :is="transitionType"
    :mode="mode"
    :tag="tag"
    enter-active-class="transition ease-in ease-out-mijin duration-500"
    :leave-active-class="flip && group
      ? 'transition ease-out ease-out-mijin duration-500 absolute'
      : 'transition ease-out ease-out-mijin duration-500'"
    enter-class="transform translate-y-2 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-2 opacity-0"
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
