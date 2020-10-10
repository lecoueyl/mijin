<template>
  <LayoutSample
    :title="$t('sections.atoms.note.title')"
    :components="['Tabs', 'TabsItem']"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbNote>
        {{ $t('props.default') }}
      </BbNote>
    </Sample>

    <Sample
      :title="$t('props.variant')"
      :snippet="samples.variant"
    >
      <BbNote
        v-for="variant in ['success', 'error', 'warning']"
        :key="variant"
        :variant="variant"
        class="mb-8"
      >
        {{ variant }}
      </BbNote>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      demo: {
        default: 0,
        disabled: 0,
      },
      samples: {
        default: [
          `<BbNote>
  ${this.$t('props.default')}
</BbNote>`,
        ],
        variant: [
          `<BbNote variant="success>
  success
</BbNote>

<BbNote variant="error>
  error
</BbNote>

<BbNote variant="warning>
  warning
</BbNote>`,
        ],
      },
    };
  },
});
</script>
