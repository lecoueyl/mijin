<template>
  <table
    class="w-full"
    :class="[
      {
        'relative': stickyHeader,
        'table-fixed': fixed,
      }
    ]"
  >
    <slot />
  </table>
</template>

<script>
export default {
  name: 'MijiTable',

  props: {
    density: {
      default: 'normal',
      type: String,
      validator: (value) => [
        'tight',
        'normal',
      ].includes(value),
    },

    fixed: {
      default: false,
      type: Boolean,
    },

    stickyHeader: {
      default: true,
      type: Boolean,
    },
  },
};
</script>
