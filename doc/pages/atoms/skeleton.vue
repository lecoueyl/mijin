<template>
  <LayoutSample
    :title="$t('sections.atoms.skeleton.title')"
    components="Skeleton"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjSkeleton />
    </Sample>

    <Sample
      :title="$t('props.rounded')"
      :snippet="samples.rounded"
    >
      <MjSkeleton
        rounded
        class="h-10 w-10"
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
        default: ['<MjSkeleton />'],
        rounded: [`<MjSkeleton
  rounded
  class="h-10 w-10"
/>`],
      },
    };
  },
});
</script>
