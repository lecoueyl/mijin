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
        v-for="(color, index) in [
          { bg: 'primary-100', text: 'primary-500', value: '12'},
          { bg: 'primary-500', text: 'white', value: '999'},
        ]"
        :key="index"
        :bg-color="color.bg"
        :text-color="color.text"
        :class="[{ 'ml-2': index !== 0 }]"
      >
        {{ color.value }}
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
        default: [`<BbBadge hred="#">
  1
</BbBadge>`],
        color: [`<BbBadge
  bg-color="primary-100"
  text-color="primary-500"
>
  12
</BbBadge>

<BbBadge
  bg-color="primary-500"
  text-color="white"
>
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
