<template>
  <Component
    :is="tag"
    class="bg-white dark:bg-gray-900 shadow-lg sm:rounded-md border-t sm:border border-gray-200 dark:border-gray-800 w-full"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  name: 'MijinPopoverContainer',

  props: {
    tag: {
      default: 'div',
      type: String,
    },
  },

  created() {
    if (this.$parent.$options.name !== 'MijinPopover') {
      this.$destroy();
      throw new Error('PopoverContainer must be wrap with Popover');
    }
  },
};
</script>
