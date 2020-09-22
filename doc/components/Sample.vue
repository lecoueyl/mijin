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

    <div class="p-4 bg-gray-200 rounded-b-lg">
      {{ parent.$t('common.viewCode') }}

      <code
        v-if="props.snippet"
        class="whitespace-pre"
      >
        {{ props.snippet }}
      </code>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    snippet: {
      default: null,
      type: String,
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
