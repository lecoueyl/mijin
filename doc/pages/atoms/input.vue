<template>
  <LayoutSample
    :title="$t('sections.atoms.input.title')"
    components="Input"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjInput
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
      />
    </Sample>

    <Sample
      :title="$t('props.label')"
      :snippet="samples.label"
    >
      <MjInput
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
      >
        {{ $t('examples.input.label') }}
      </MjInput>
    </Sample>

    <Sample
      :title="$t('props.password')"
      :snippet="samples.password"
    >
      <MjInput
        v-model="model.password"
        type="password"
        class="sm:w-1/2"
      />
    </Sample>

    <Sample
      :title="$t('props.icon')"
      :snippet="samples.icon"
    >
      <MjInput
        class="sm:w-1/2"
        :placeholder="$t('examples.input.placeholder')"
      >
        <template #icon>
          <MjIcon name="user" />
        </template>
      </MjInput>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <MjInput
        class="sm:w-1/2"
        :value="$t('examples.input.label')"
        disabled
      />
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <MjInput
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
          `<MjInput placeholder="${this.$t('examples.input.placeholder')}" />`,
        ],
        label: [
          `<MjInput placeholder="${this.$t('examples.input.placeholder')}">
  ${this.$t('examples.input.label')}
</MjInput>`,
        ],
        password: [
          '<MjInput type="password />',
        ],
        icon: [
          `<MjInput>
  <template #icon>
    <MjIcon name="user" />
  </template>
</MjInput>`,
        ],
        disabled: [
          '<MjInput disabled />',
        ],
        size: [
          `<MjInput
  placeholder="${this.$t('examples.input.placeholder')}"
  size="sm"
>
  ${this.$t('examples.input.label')}
</MjInput>`,
        ],
      },
    };
  },
});
</script>
