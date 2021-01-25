<template>
  <td
    class="last:pr-0"
    :class="[
      {
        // density
        'py-1 pr-2': tableProps.density === 'tight',
        'py-2 pr-4': tableProps.density === 'normal',
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
    ]"
  >
    <slot />
  </td>
</template>

<script>
const validator = {
  textAlign: [
    null,
    'left',
    'center',
    'right',
    'justify',
  ],
  verticalAlign: [
    null,
    'baseline',
    'bottom',
    'middle',
    'text-bottom',
    'text-top',
    'top',
  ],
};

export default {
  name: 'MijinTableCell',

  validator,

  props: {
    textAlign: {
      default: null,
      type: String,
      validator: (value) => validator.textAlign.includes(value),
    },

    truncate: {
      default: false,
      type: Boolean,
    },

    verticalAlign: {
      default: null,
      type: String,
      validator: (value) => validator.verticalAlign.includes(value),
    },
  },

  computed: {
    tableProps() {
      return this.$parent?.$parent?.$parent?.$props;
    },
  },

  created() {
    if (this.$parent.$options.name !== 'MijinTableRow') {
      this.$destroy();
      throw new Error('TableCell must be wrap with TableRow');
    }

    if (this.truncate && !this.tableProps.fixed) {
      // eslint-disable-next-line no-console
      console.warn('Table must have "fixed" property set to true when using TableCell "truncate" property');
    }
  },
};
</script>
