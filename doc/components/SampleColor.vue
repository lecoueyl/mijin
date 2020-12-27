<template>
  <div>
    <div
      v-for="(value, variation, index) in color"
      :key="variation"
      class="p-3"
      :class="[
        parseInt(variation, 10) < 500 ? 'text-gray-900' : 'text-gray-50',
        `bg-${name}-${variation}`,
        {
          'rounded-t-lg': index === 0,
          'rounded-b-lg': index === Object.keys(color).length - 1,
        },
      ]"
    >
      {{ name }}-{{ variation }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    color: {
      required: true,
      type: Object,
    },

    name: {
      required: true,
      type: String,
    },
  },
});
</script>
