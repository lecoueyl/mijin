<template>
  <tbody>
    <slot />
  </tbody>
</template>

<script>
export default {
  name: 'MijiTableBody',

  created() {
    if (this.$parent.$options.name !== 'MijiTable') {
      this.$destroy();
      throw new Error('TableBody must be wrap with Table');
    }
  },
};
</script>
