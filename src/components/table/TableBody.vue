<template>
  <tbody>
    <slot />
  </tbody>
</template>

<script>
export default {
  name: 'MijinTableBody',

  created() {
    if (this.$parent.$options.name !== 'MijinTable') {
      this.$destroy();
      throw new Error('TableBody must be wrap with Table');
    }
  },
};
</script>
