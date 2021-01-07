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
export default {
  name: 'MijiTableTitle',

  props: {
    textAlign: {
      default: 'left',
      type: String,
      validator: (value) => [
        'left',
        'center',
        'right',
        'justify',
      ].includes(value),
    },
  },

  computed: {
    tableProps() {
      return this.$parent?.$parent?.$props;
    },
  },

  created() {
    if (this.$parent.$options.name !== 'MijiTableHead') {
      this.$destroy();
      throw new Error('TableTitle must be wrap with TableHead');
    }
  },
};
</script>
