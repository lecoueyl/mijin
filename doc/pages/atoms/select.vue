<template>
  <LayoutSample
    :title="$t('sections.atoms.select.title')"
    components="Select"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbSelect
        v-model="model.default"
        class="sm:w-1/2"
      >
        <option
          v-for="(option, index) in $t('examples.list')"
          :key="index"
          :value="option"
        >
          {{ option }}
        </option>
      </BbSelect>
    </Sample>

    <Sample
      :title="$t('props.label')"
      :snippet="samples.label"
    >
      <BbSelect class="sm:w-1/2">
        <option>test</option>
        <option>test</option>
        <option>test</option>

        <template v-slot:label>
          {{ $t('examples.input.label') }}
        </template>
      </BbSelect>
    </Sample>

    <Sample
      :title="$t('props.placeholder')"
      :snippet="samples.placeholder"
    >
      <BbSelect
        v-model="model.placeholder"
        :placeholder="$t('examples.input.placeholder')"
        class="sm:w-1/2"
      >
        <option>test</option>
        <option>test</option>
        <option>test</option>
      </BbSelect>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      model: {
        default: this.$t('examples.list.1'),
        placeholder: '',
      },
      samples: {
        default: [
          `<BbSelect class="w-1/2">
  <option value="${this.$t('examples.list.1')}">${this.$t('examples.list.1')}</option>
  <option value="${this.$t('examples.list.2')}">${this.$t('examples.list.2')}</option>
  <option value="${this.$t('examples.list.3')}">${this.$t('examples.list.3')}</option>
</BbSelect>`,
        ],
      },
    };
  },
});
</script>
