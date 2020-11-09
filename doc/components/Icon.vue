<template functional>
  <div class="p-4 bg-gray-100 rounded-lg text-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      shape-rendering="geometricPrecision"
      :aria-labelledby="props.name"
      role="presentation"
      class="inline-block h-5 w-5"
    >
      <g v-html="props.svg" />
    </svg>

    <h4 class="text-xs text-gray-800 pt-4">
      {{ props.name }}
    </h4>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },

    svg: {
      type: String,
      required: true,
    },
  },
});
</script>
