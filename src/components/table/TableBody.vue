<template>
  <tbody>
    <slot />
  </tbody>
</template>

<script>
export default {
  name: 'UiTableBody',

  created() {
    if (this.$parent.$options.name !== 'UiTable' && process.env.NODE_ENV !== 'test') {
      this.$destroy();
      throw new Error('TableBody must be wrap with Table');
    }
  },
};
</script>
