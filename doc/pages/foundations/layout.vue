<template>
  <LayoutSample
    :title="$t('sections.foundations.layout.title')"
  >
    <Sample
      :title="$t('props.container')"
      :snippet="samples.container"
    >
      <BbContainer>
        <div class="py-10 bg-primary-500 rounded-md" />
      </BbContainer>
    </Sample>

    <Sample
      :title="$t('props.grid')"
      :snippet="samples.grid"
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
        container: [
          `<BbContainer>
  <div class="py-10 bg-gray-300 rounded-md" />
</BbContainer>`,
        ],
        grid: [
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
