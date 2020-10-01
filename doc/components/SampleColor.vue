<template functional>
  <div>
    <div
      v-for="(value, variation, index) in props.color"
      :key="variation"
      class="p-3"
      :class="[
        `bg-${props.name}-${variation}`,
        parseInt(variation) < 500 ? 'text-black' : 'text-white',
        {
          'rounded-t-lg': index === 0,
          'rounded-b-lg': index === Object.keys(props.color).length - 1,
        },
      ]"
    >
      {{ props.name }}-{{ variation }}
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
