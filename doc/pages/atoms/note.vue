<template>
  <LayoutSample
    :title="$t('sections.atoms.note.title')"
    components="Note"
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
        v-for="variant in ['success', 'danger', 'warning']"
        :key="variant"
        :variant="variant"
        class="mb-8 last:mb-0"
      >
        {{ variant }}
      </BbNote>
    </Sample>

    <Sample
      :title="$t('props.filled')"
      :snippet="samples.filled"
    >
      <BbNote
        v-for="variant in [null, 'success', 'danger', 'warning']"
        :key="`filled-${variant}`"
        :variant="variant"
        class="mb-8 last:mb-0"
        filled
      >
        <template v-if="!variant">
          {{ $t('props.default') }}
        </template>
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

<BbNote variant="danger>
  danger
</BbNote>

<BbNote variant="warning>
  warning
</BbNote>`,
        ],
        filled: [
          `<BbNote filled>
  ${this.$t('props.default')}
</BbNote>

<BbNote
  filled
  variant="success"
>
  success
</BbNote>

<BbNote
  filled
  variant="danger"
>
  danger
</BbNote>

<BbNote
  filled
  variant="warning"
>
  warning
</BbNote>`,
        ],
      },
    };
  },
});
</script>
