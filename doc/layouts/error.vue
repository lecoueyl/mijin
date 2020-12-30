<template>
  <main class="container mx-auto px-4 text-center ">
    <h1 class="text-6xl pt-32">
      404
    </h1>

    <p class="text-xl text-wash-900">
      {{ $t('error.notFound') }}
    </p>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head() {
    return { title: this.$t('error.title') };
  },
});
</script>
