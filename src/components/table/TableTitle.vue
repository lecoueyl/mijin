<template>
  <th
    class="py-2 font-medium"
    :class="{
      'sticky top-0': tableProps.stickyHeader,
    }"
  >
    <slot />
  </th>
</template>

<script>
export default {
  name: 'UiTableTitle',

  computed: {
    tableProps() {
      return this.$parent.$parent.$props;
    },
  },

  created() {
    if (this.$parent.$options.name !== 'UiTableHead') {
      this.$destroy();
      throw new Error('TableTitle must be wrap with TableHead');
    }
  },
};
</script>
