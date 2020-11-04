<template>
  <LayoutSample
    :title="$t('sections.atoms.select.title')"
    components="Select"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbSelect>
        <option>{{ $t('examples.list.1') }}</option>
        <option>{{ $t('examples.list.2') }}</option>
        <option>{{ $t('examples.list.3') }}</option>
      </BbSelect>
    </Sample>

    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbSelect>
        <option>test</option>
        <option>test</option>
        <option>test</option>

        <template v-slot:label>
          {{ $t('examples.input.label') }}
        </template>
      </BbSelect>
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
          `<BbInput placeholder="${this.$t('examples.input.placeholder')}" />`,
        ],
      },
    };
  },
});
</script>
