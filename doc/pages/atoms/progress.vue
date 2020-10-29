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
        color="red-500"
      />

      <BbProgress
        class="mt-4"
        :percentage="40"
        color="orange-500"
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
  color="red-500"
/>

<BbProgress
  :percentage="40"
  color="orange-500"
/>`],
        circle: [`<BbProgress
  :percentage="75"
  variant="75"
/>`],
      },
    };
  },
});
</script>
