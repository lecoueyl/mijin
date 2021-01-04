<template>
  <LayoutSample
    :title="$t('sections.atoms.headline.title')"
    components="Headline"
  >
    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <MjHeadline
        v-for="index in 4"
        :key="index"
        :size="index"
        :class="{'pt-4': index !== 1 }"
      >
        Almost before we knew it, we had left the ground.
      </MjHeadline>
    </Sample>

    <Sample
      :title="$t('props.level')"
      :snippet="samples.level"
    >
      <MjHeadline
        v-for="index in 4"
        :key="index"
        :level="index"
        :class="{ 'pt-4': index !== 1 }"
      >
        H{{ index }}
      </MjHeadline>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        size: [
          `<MjHeadline size="1">
  Size 1
</MjButton>

<MjHeadline size="2">
  Size 2
</MjButton>

<MjHeadline size="3">
  Size 3
</MjButton>

<MjHeadline size="4">
  Size 4
</MjButton>`,
        ],
        level: [
          `<MjHeadline level="1">
  H1
</MjButton>

<MjHeadline level="2">
  H2
</MjButton>

<MjHeadline level="3">
  H3
</MjButton>

<MjHeadline level="4">
  H4
</MjButton>`,
        ],
      },
    };
  },
});
</script>
