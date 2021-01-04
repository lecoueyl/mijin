<template>
  <LayoutSample
    :title="$t('sections.atoms.textarea.title')"
    components="Textarea"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjTextarea
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
      />
    </Sample>

    <Sample
      :title="$t('props.label')"
      :snippet="samples.label"
    >
      <MjTextarea
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
      >
        {{ $t('examples.input.label') }}
      </MjTextarea>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <MjTextarea
        class="sm:w-1/2"
        :value="$t('examples.input.label')"
        disabled
      />
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <MjTextarea
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
        size="sm"
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
        default: [
          `<MjTextarea placeholder="${this.$t('examples.input.placeholder')}" />`,
        ],
        label: [
          `<MjTextarea placeholder="${this.$t('examples.input.placeholder')}">
  ${this.$t('examples.input.label')}
</MjTextarea>`,
        ],
        disabled: [
          '<MjTextarea disabled />',
        ],
        size: [
          `<MjTextarea
  placeholder="${this.$t('examples.input.placeholder')}"
  size="sm"
>
  ${this.$t('examples.input.label')}
</MjTextarea>`,
        ],
      },
    };
  },
});
</script>
