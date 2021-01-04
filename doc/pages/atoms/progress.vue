<template>
  <LayoutSample
    :title="$t('sections.atoms.progress.title')"
    components="Progress"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjProgress :percentage="50" />
    </Sample>

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <MjProgress
        :percentage="20"
        color="danger"
      />

      <MjProgress
        class="mt-4"
        :percentage="40"
        color="warning"
      />

      <MjProgress
        class="mt-4"
        :percentage="100"
        color="success"
      />
    </Sample>

    <Sample
      :title="$t('props.circle')"
      :snippet="samples.circle"
    >
      <MjProgress
        class="w-24"
        :percentage="75"
        variant="circle"
      />
    </Sample>

    <Sample
      :title="$t('props.score')"
      :snippet="samples.score"
    >
      <MjProgress
        :percentage="50"
        variant="score"
      />

      <MjProgress
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
        default: ['<MjProgress :percentage="50" />'],
        color: [`<MjProgress
  :percentage="20"
  color="danger"
/>

<MjProgress
  :percentage="40"
  color="warning"
/>

<MjProgress
  class="mt-4"
  :percentage="100"
  color="success"
/>`],
        circle: [`<MjProgress
  :percentage="75"
  variant="75"
/>`],
        score: [`<MjProgress
  :percentage="50"
  variant="score"
/>

<MjProgress
  :percentage="50"
  :score-length="5"
  variant="score"
/>`],
      },
    };
  },
});
</script>
