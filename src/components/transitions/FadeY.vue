<template>
  <Component
    :is="transitionType"
    :tag="tag"
    enter-active-class="transition ease-in duration-150"
    leave-active-class="transition ease-out duration-150"
    enter-class="transform translate-y-2 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-2 opacity-0"
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
