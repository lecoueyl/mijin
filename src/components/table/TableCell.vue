<template>
  <td
    class="last:pr-0"
    :class="[
      {
        // text-align
        'text-left': textAlign === 'left',
        'text-center': textAlign === 'center',
        'text-right': textAlign === 'right',
        'text-justify': textAlign === 'justify',
        // vertical-align
        'align-baseline': verticalAlign === 'baseline',
        'align-bottom': verticalAlign === 'bottom',
        'align-middle': verticalAlign === 'middle',
        'align-text-bottom': verticalAlign === 'text-bottom',
        'align-text-top': verticalAlign === 'text-top',
        'align-top': verticalAlign === 'top',
        // truncate
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
  name: 'MijiTableCell',

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
      if (this.$parent.$options.name !== 'MijiTableRow') {
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
