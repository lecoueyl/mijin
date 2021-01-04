<template>
  <LayoutSample
    :title="$t('sections.atoms.badge.title')"
    components="Badge"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjBadge>
        1
      </MjBadge>
    </Sample>

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <MjBadge
        v-for="(item, index) in [
          { color: 'primary', value: '12'},
          { color: 'green', value: '999'},
        ]"
        :key="index"
        :color="item.color"
        :class="[{ 'ml-2': index !== 0 }]"
      >
        {{ item.value }}
      </MjBadge>
    </Sample>

    <Sample
      :title="$t('props.variant')"
      :snippet="samples.variant"
    >
      <MjBadge variant="outline">
        42
      </MjBadge>
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <MjBadge size="sm">
        {{ $t('props.size') }}
      </MjBadge>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: [`<MjBadge href="#">
  1
</MjBadge>`],
        color: [`<MjBadge color="primary">
  12
</MjBadge>

<MjBadge color="green">
  999
</MjBadge>
`],
        variant: [`<MjBadge variant="outline">
  42
</MjBadge>`],
        size: [`<MjBadge size="small">
  ${this.$t('props.size')}
</MjBadge>`],
      },
    };
  },
});
</script>
