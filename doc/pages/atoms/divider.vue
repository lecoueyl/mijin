<template>
  <LayoutSample
    :title="$t('sections.atoms.divider.title')"
    components="Divider"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbDivider />
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: ['<BbDivider />'],
      },
    };
  },
});
</script>
