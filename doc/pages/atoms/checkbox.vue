<template>
  <LayoutSample
    :title="$t('sections.atoms.checkbox.title')"
    component="Checkbox"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbCheckbox
        v-model="model.default"
        name="checkbox"
      >
        {{ $t('props.default') }}
      </BbCheckbox>
    </Sample>

    <Sample
      :title="$t('props.multiple')"
      :snippet="samples.array"
    >
      <BbCheckbox
        v-model="model.array"
        name="checkbox"
        :value="1"
      >
        1
      </BbCheckbox>

      <BbCheckbox
        v-model="model.array"
        name="checkbox"
        :value="2"
        class="ml-6"
      >
        2
      </BbCheckbox>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <BbCheckbox
        v-model="model.false"
        disabled
      >
        {{ $t('props.disabled') }}
      </BbCheckbox>

      <BbCheckbox
        v-model="model.true"
        disabled
        class="ml-6"
      >
        {{ $t('props.disabled') }}
      </BbCheckbox>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      model: {
        array: [2],
        default: true,
        false: false,
        true: true,
      },
      samples: {
        default: [
          `<BbCheckbox
  v-model="value"
  name="checkbox"
>
  Default
</BbCheckbox>`,
        ],
        array: [
          `<BbCheckbox
  v-model="value"
  name="checkbox"
  :value="1"
>
  1
</BbCheckbox>

<BbCheckbox
  v-model="value"
  name="checkbox"
  :value="2"
>
  2
</BbCheckbox>`,
        ],
        disabled: [
          `<BbCheckbox
  v-model="value"
  name="checkbox"
  disabled
>
  Disabled
</BbCheckbox>`,
        ],
      },
    };
  },
});
</script>
