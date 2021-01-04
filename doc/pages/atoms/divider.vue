<template>
  <LayoutSample
    :title="$t('sections.atoms.divider.title')"
    components="Divider"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjDivider />
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: ['<MjDivider />'],
      },
    };
  },
});
</script>
