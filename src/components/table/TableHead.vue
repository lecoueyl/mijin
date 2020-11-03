<template>
  <thead class="align-bottom">
    <tr class="text-sm text-gray-700">
      <slot />
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'UiTableHead',

  created() {
    if (this.$parent.$options.name !== 'UiTable' && process.env.NODE_ENV !== 'test') {
      this.$destroy();
      throw new Error('TableHead must be wrap with Table');
    }
  },
};
</script>
