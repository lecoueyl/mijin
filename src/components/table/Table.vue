<template>
  <table
    class="w-full"
  >
    <slot />
  </table>
</template>

<script>
export default {
  name: 'UiTable',

  props: {
    density: {
      default: 'normal',
      type: String,
      validator: (value) => [
        'tight',
        'normal',
      ].includes(value),
    },

    stickyHeader: {
      default: true,
      type: Boolean,
    },
  },
};
</script>
