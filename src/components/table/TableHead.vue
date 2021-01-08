<template>
  <thead class="align-bottom">
    <tr class="text-sm text-gray-600 dark:text-gray-500 border-b border-gray-200 dark:border-gray-700">
      <slot />
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'MijinTableHead',

  created() {
    if (this.$parent.$options.name !== 'MijinTable') {
      this.$destroy();
      throw new Error('TableHead must be wrap with Table');
    }
  },
};
</script>
