<template>
  <td
    class="last:pr-0"
    :class="[
      {
        [`align-${verticalAlign}`]: verticalAlign,
        [`text-${textAlign}`]: textAlign,
        'truncate': truncate && tableProps.fixed,
      },
      tableProps && tableProps.density === 'tight' ? 'py-1 pr-2' : 'py-2 pr-4'
    ]"
  >
    <slot />
  </td>
</template>

<script>
export default {
  name: 'UiTableCell',

  props: {
    textAlign: {
      default: null,
      type: String,
      validator: (value) => [
        null,
        'left',
        'center',
        'right',
        'justify',
      ].includes(value),
    },

    truncate: {
      default: false,
      type: Boolean,
    },

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
      return this.$parent?.$parent?.$parent?.$props;
    },
  },

  created() {
    if (process.env.NODE_ENV !== 'test') {
      if (this.$parent.$options.name !== 'UiTableRow') {
        this.$destroy();
        throw new Error('TableCell must be wrap with TableRow');
      }

      if (this.truncate && !this.tableProps.fixed) {
        // eslint-disable-next-line no-console
        console.warn('Table must have "fixed" property set to true when using TableCell "truncate" property');
      }
    }
  },
};
</script>
