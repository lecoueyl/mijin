<template>
  <th
    class="py-2 font-medium pr-1 last:pr-0"
    :class="[
      {
        'sticky top-0': tableProps && tableProps.stickyHeader,
        'text-left': textAlign === 'left',
        'text-center': textAlign === 'center',
        'text-right': textAlign === 'right',
        'text-justify': textAlign === 'justify',
      },
    ]"
  >
    <slot />
  </th>
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
};

export default {
  name: 'MijinTableTitle',

  validator,

  props: {
    textAlign: {
      default: 'left',
      type: String,
      validator: (value) => validator.textAlign.includes(value),
    },
  },

  computed: {
    tableProps() {
      return this.$parent?.$parent?.$props;
    },
  },

  created() {
    if (this.$parent.$options.name !== 'MijinTableHead') {
      this.$destroy();
      throw new Error('TableTitle must be wrap with TableHead');
    }
  },
};
</script>
