<template>
  <div>
    <div
      v-for="(value, variation, index) in color"
      :key="variation"
      class="p-3"
      :class="[
        `bg-${name}-${variation}`,
        {
          'rounded-t-lg': index === 0,
          'rounded-b-lg': index === Object.keys(color).length - 1,
        },
        textColor(variation),
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

  methods: {
    textColor(variation: string) {
      if (parseInt(variation, 10) < 500) {
        return this.name === 'gray' ? 'text-foreground' : 'text-black';
      }
      return this.name === 'gray' ? 'text-background' : 'text-white';
    },
  },
});
</script>
