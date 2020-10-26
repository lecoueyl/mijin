<template functional>
  <section class="pb-10">
    <BbHeadline
      :id="$options.id(props.title)"
      :level="2"
      :size="4"
      class="pb-8"
    >
      {{ props.title }}
    </BbHeadline>

    <div class="p-4 bg-gray-100 rounded-t-lg">
      <slot />
    </div>

    <div class="p-4 bg-gray-900 rounded-b-lg">
      <code
        v-for="(code, index) in props.snippet"
        :key="index"
        class="whitespace-pre-wrap text-sm text-gray-100"
      >{{ code }}</code>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    snippet: {
      default: () => [],
      type: Array,
    },

    title: {
      required: true,
      type: String,
    },
  },

  id(title) {
    return title.toLowerCase().replace(/ /g, '-');
  },
});
</script>
