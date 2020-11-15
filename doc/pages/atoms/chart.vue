<template>
  <LayoutSample
    :title="$t('sections.atoms.chart.title')"
    components="Chart"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbStatus
        v-for="status in ['disabled', 'danger', 'error', 'valid', 'warning']"
        :key="status"
        :status="status"
        class="ml-2"
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
        default: [
          `<BbAvatar
  alt="image"
  img="https://..."
/>`],
      },
    };
  },
});
</script>
