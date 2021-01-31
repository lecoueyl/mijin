<template>
  <table
    class="w-full"
    :class="[
      {
        'overflow-x-scroll sm:overflow-x-auto whitespace-wrap sm:whitespace-normal block sm:table': scrollable,
        'relative': stickyHeader,
        'table-fixed': fixed,
      }
    ]"
  >
    <slot />
  </table>
</template>

<script>
const validator = {
  density: [
    'tight',
    'normal',
  ],
};

export default {
  name: 'MijinTable',

  validator,

  props: {
    density: {
      default: 'normal',
      type: String,
      validator: (value) => validator.density.includes(value),
    },

    fixed: {
      default: false,
      type: Boolean,
    },

    scrollable: {
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
