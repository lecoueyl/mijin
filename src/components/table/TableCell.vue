<template>
  <td
    :class="[
      tableProps.density === 'tight' ? 'py-1' : 'py-2'
    ]"
  >
    <slot />
  </td>
</template>

<script>
export default {
  name: 'UiTableCell',

  props: {
  },

  computed: {
    tableProps() {
      return this.$parent.$parent.$props;
    },
  },

  created() {
    if (this.$parent.$options.name !== 'UiTableRow') {
      this.$destroy();
      throw new Error('TableCell must be wrap with TableRow');
    }
  },
};
</script>
