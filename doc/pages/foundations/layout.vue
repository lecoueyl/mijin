<template>
  <LayoutSample
    :title="$t('sections.foundations.colors.title')"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbGrid cols="3" gap="4">
        <div class="py-10 bg-primary-500 rounded-md" />
        <div class="py-10 bg-primary-500 rounded-md" />
        <div class="py-10 bg-primary-500 rounded-md" />
      </BbGrid>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: [
          `<BbGrid cols="3" gap="4">
  <div class="py-10 bg-gray-300 rounded-md" />
  <div class="py-10 bg-gray-300 rounded-md" />
  <div class="py-10 bg-gray-300 rounded-md" />
</BbGrid>`,
        ],
      },
    };
  },
});
</script>
