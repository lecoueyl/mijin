<template>
  <LayoutSample
    :title="$t('sections.atoms.progress.title')"
    components="Progress"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbProgress :percentage="50" />
    </Sample>

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <BbProgress
        :percentage="20"
        color="danger"
      />

      <BbProgress
        class="mt-4"
        :percentage="40"
        color="warning"
      />

      <BbProgress
        class="mt-4"
        :percentage="100"
        color="success"
      />
    </Sample>

    <Sample
      :title="$t('props.circle')"
      :snippet="samples.circle"
    >
      <BbProgress
        class="w-24"
        :percentage="75"
        variant="circle"
      />
    </Sample>

    <Sample
      :title="$t('props.score')"
      :snippet="samples.score"
    >
      <BbProgress
        :percentage="50"
        variant="score"
      />

      <BbProgress
        class="mt-4"
        :percentage="50"
        :score-length="5"
        variant="score"
      />
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: ['<BbProgress :percentage="50" />'],
        color: [`<BbProgress
  :percentage="20"
  color="danger"
/>

<BbProgress
  :percentage="40"
  color="warning"
/>

<BbProgress
  class="mt-4"
  :percentage="100"
  color="success"
/>`],
        circle: [`<BbProgress
  :percentage="75"
  variant="75"
/>`],
        score: [`<BbProgress
  :percentage="50"
  variant="score"
/>

<BbProgress
  :percentage="50"
  :score-length="5"
  variant="score"
/>`],
      },
    };
  },
});
</script>
