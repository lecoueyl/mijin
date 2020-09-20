<template>
  <section class="pb-10">
    <BbHeadline
      :level="2"
      :size="4"
      class="pb-8"
    >
      {{ title }}
    </BbHeadline>

    <div class="p-4 border border-gray-300 rounded-md">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
