<template>
  <td
    :class="[
      {
        [`align-${verticalAlign}`]: verticalAlign,
      },
      tableProps && tableProps.density === 'tight' ? 'py-1' : 'py-2'
    ]"
  >
    <slot />
  </td>
</template>

<script>
export default {
  name: 'UiTableCell',

  props: {
    verticalAlign: {
      default: null,
      type: String,
      validator: (value) => [
        null,
        'baseline',
        'bottom',
        'middle',
        'text-bottom',
        'text-top',
        'top',
      ].includes(value),
    },
  },

  computed: {
    tableProps() {
      return this.$parent.$parent.$parent.$props;
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
