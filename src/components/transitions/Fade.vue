<template>
  <Component
    :is="transitionType"
    :mode="mode"
    :tag="tag"
    enter-active-class="transition-opacity ease-out-mijin duration-700"
    leave-active-class="transition-opacity ease-out-mijin duration-300"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
    move-class="ease-in-out duration-150"
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
