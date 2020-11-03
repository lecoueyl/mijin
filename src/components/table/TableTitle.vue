<template>
  <th
    class="py-2 font-medium pr-1 last:pr-0"
    :class="[
      {
        'sticky top-0': tableProps && tableProps.stickyHeader,
      },
      `text-${textAlign}`,
    ]"
  >
    <slot />
  </th>
</template>

<script>
export default {
  name: 'UiTableTitle',

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
    if (this.$parent.$options.name !== 'UiTableHead' && process.env.NODE_ENV !== 'test') {
      this.$destroy();
      throw new Error('TableTitle must be wrap with TableHead');
    }
  },
};
</script>
