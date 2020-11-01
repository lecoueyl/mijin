<template>
  <tbody>
    <slot />
  </tbody>
</template>

<script>
export default {
  name: 'UiTableBody',

  created() {
    if (this.$parent.$options.name !== 'UiTable') {
      this.$destroy();
      throw new Error('TableBody must be wrap with Table');
    }
  },
};
</script>
