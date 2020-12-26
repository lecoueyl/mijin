<template>
  <LayoutSample
    :title="$t('sections.atoms.badge.title')"
    components="Badge"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbBadge>
        1
      </BbBadge>
    </Sample>

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <BbBadge
        v-for="(item, index) in [
          { color: 'primary', value: '12'},
          { color: 'green', value: '999'},
        ]"
        :key="index"
        :color="item.color"
        :class="[{ 'ml-2': index !== 0 }]"
      >
        {{ item.value }}
      </BbBadge>
    </Sample>

    <Sample
      :title="$t('props.variant')"
      :snippet="samples.variant"
    >
      <BbBadge variant="outline">
        42
      </BbBadge>
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <BbBadge size="sm">
        {{ $t('props.size') }}
      </BbBadge>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: [`<BbBadge href="#">
  1
</BbBadge>`],
        color: [`<BbBadge color="primary">
  12
</BbBadge>

<BbBadge color="green">
  999
</BbBadge>
`],
        variant: [`<BbBadge variant="outline">
  42
</BbBadge>`],
        size: [`<BbBadge size="small">
  ${this.$t('props.size')}
</BbBadge>`],
      },
    };
  },
});
</script>
