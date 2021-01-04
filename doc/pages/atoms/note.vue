<template>
  <LayoutSample
    :title="$t('sections.atoms.note.title')"
    components="Note"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjNote>
        {{ $t('props.default') }}
      </MjNote>
    </Sample>

    <Sample
      :title="$t('props.variant')"
      :snippet="samples.variant"
    >
      <MjNote
        v-for="variant in ['success', 'danger', 'warning']"
        :key="variant"
        :variant="variant"
        class="mb-8 last:mb-0"
      >
        {{ variant }}
      </MjNote>
    </Sample>

    <Sample
      :title="$t('props.filled')"
      :snippet="samples.filled"
    >
      <MjNote
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
      </MjNote>
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
          `<MjNote>
  ${this.$t('props.default')}
</MjNote>`,
        ],
        variant: [
          `<MjNote variant="success>
  success
</MjNote>

<MjNote variant="danger>
  danger
</MjNote>

<MjNote variant="warning>
  warning
</MjNote>`,
        ],
        filled: [
          `<MjNote filled>
  ${this.$t('props.default')}
</MjNote>

<MjNote
  filled
  variant="success"
>
  success
</MjNote>

<MjNote
  filled
  variant="danger"
>
  danger
</MjNote>

<MjNote
  filled
  variant="warning"
>
  warning
</MjNote>`,
        ],
      },
    };
  },
});
</script>
