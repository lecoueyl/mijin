<template>
  <thead class="align-bottom">
    <tr class="text-sm text-gray-600 dark:text-gray-500 border-b border-gray-200 dark:border-gray-700">
      <slot />
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'MijiTableHead',

  created() {
    if (this.$parent.$options.name !== 'MijiTable' && process.env.NODE_ENV !== 'test') {
      this.$destroy();
      throw new Error('TableHead must be wrap with Table');
    }
  },
};
</script>
