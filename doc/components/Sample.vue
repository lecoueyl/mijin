<template functional>
  <section class="pb-10">
    <BbHeadline
      :level="2"
      :size="4"
      class="pb-8"
    >
      {{ props.title }}
    </BbHeadline>

    <div class="p-4 bg-gray-100 rounded-t-lg">
      <slot />
    </div>

    <div class="p-4 bg-gray-200 rounded-b-lg">
      View code
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
