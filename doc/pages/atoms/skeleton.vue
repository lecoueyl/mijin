<template>
  <LayoutSample
    :title="$t('sections.atoms.skeleton.title')"
    components="Skeleton"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbSkeleton class="rounded h-4" />
    </Sample>

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <BbSkeleton
        v-for="(color, index) in ['primary-500', 'red-300', 'yellow-500']"
        :key="color"
        :color="color"
        :class="[{ 'mt-10': index !== 0 }]"
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
        default: ['<BbSkeleton />'],
        color: [`<BbSkeleton color="primary-500" />

<BbSkeleton color="red-300" />

<BbSkeleton color="yellow-500" />`],
      },
    };
  },
});
</script>
