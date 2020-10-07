<template>
  <LayoutSample
    :title="$t('sections.atoms.headline.title')"
    component="Headline"
  >
    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <BbHeadline
        v-for="index in 4"
        :key="index"
        :size="index"
        :class="{'pt-4': index !== 1 }"
      >
        Almost before we knew it, we had left the ground.
      </BbHeadline>
    </Sample>

    <Sample
      :title="$t('props.level')"
      :snippet="samples.level"
    >
      <BbHeadline
        v-for="index in 4"
        :key="index"
        :level="index"
        :class="{ 'pt-4': index !== 1 }"
      >
        H{{ index }}
      </BbHeadline>
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
          `<BbHeadline size="1">
  Size 1
</BbButton>

<BbHeadline size="2">
  Size 2
</BbButton>

<BbHeadline size="3">
  Size 3
</BbButton>

<BbHeadline size="4">
  Size 4
</BbButton>`,
        ],
        level: [
          `<BbHeadline level="1">
  H1
</BbButton>

<BbHeadline level="2">
  H2
</BbButton>

<BbHeadline level="3">
  H3
</BbButton>

<BbHeadline level="4">
  H4
</BbButton>`,
        ],
      },
    };
  },
});
</script>
