<template>
  <LayoutSample
    :title="$t('sections.atoms.select.title')"
    components="Select"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbInput
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
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
          `<BbInput placeholder="${this.$t('examples.input.placeholder')}" />`,
        ],
      },
    };
  },
});
</script>
