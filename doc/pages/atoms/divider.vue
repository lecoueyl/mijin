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

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <BbDivider
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
        default: ['<BbDivider />'],
        color: [`<BbDivider color="primary-500" />

<BbDivider color="red-300" />

<BbDivider color="yellow-500" />`],
      },
    };
  },
});
</script>
