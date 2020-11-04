<template>
  <LayoutSample
    :title="$t('sections.atoms.textarea.title')"
    components="Textarea"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbTextarea
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
      />
    </Sample>

    <Sample
      :title="$t('props.label')"
      :snippet="samples.label"
    >
      <BbTextarea
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
      >
        {{ $t('examples.input.label') }}
      </BbTextarea>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <BbTextarea
        class="sm:w-1/2"
        :value="$t('examples.input.label')"
        disabled
      />
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <BbTextarea
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
      model: {
        password: '',
      },

      samples: {
        default: [
          `<BbTextarea placeholder="${this.$t('examples.input.placeholder')}" />`,
        ],
        label: [
          `<BbTextarea placeholder="${this.$t('examples.input.placeholder')}">
  ${this.$t('examples.input.label')}
</BbTextarea>`,
        ],
        disabled: [
          '<BbTextarea disabled />',
        ],
        size: [
          `<BbTextarea
  placeholder="${this.$t('examples.input.placeholder')}"
  size="sm"
>
  ${this.$t('examples.input.label')}
</BbTextarea>`,
        ],
      },
    };
  },
});
</script>
