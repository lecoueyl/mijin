<template>
  <LayoutSample
    :title="$t('sections.atoms.input.title')"
    components="Input"
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

    <Sample
      :title="$t('props.label')"
      :snippet="samples.label"
    >
      <BbInput
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
      >
        {{ $t('examples.input.label') }}
      </BbInput>
    </Sample>

    <Sample
      :title="$t('props.password')"
      :snippet="samples.password"
    >
      <BbInput
        v-model="model.password"
        type="password"
        class="sm:w-1/2"
      />
    </Sample>

    <Sample
      :title="$t('props.icon')"
      :snippet="samples.icon"
    >
      <BbInput
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
      >
        <template #icon>
          <bb-icon name="user" />
        </template>
      </BbInput>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <BbInput
        class="sm:w-1/2"
        :value="$t('examples.input.label')"
        disabled
      />
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <BbInput
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
          `<BbInput placeholder="${this.$t('examples.input.placeholder')}" />`,
        ],
        label: [
          `<BbInput placeholder="${this.$t('examples.input.placeholder')}">
  ${this.$t('examples.input.label')}
</BbInput>`,
        ],
        password: [
          '<BbInput type="password />',
        ],
        icon: [
          `<BbInput>
  <template #icon>
    <bb-icon name="user" />
  </template>
</BbInput>`,
        ],
        disabled: [
          '<BbInput disabled />',
        ],
        size: [
          `<BbInput
  placeholder="${this.$t('examples.input.placeholder')}"
  size="sm"
>
  ${this.$t('examples.input.label')}
</BbInput>`,
        ],
      },
    };
  },
});
</script>
