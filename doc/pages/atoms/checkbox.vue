<template>
  <LayoutSample
    :title="$t('sections.atoms.checkbox.title')"
    components="Checkbox"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjCheckbox
        v-model="model.default"
        name="checkbox"
      >
        {{ $t('props.default') }}
      </MjCheckbox>
    </Sample>

    <Sample
      :title="$t('props.multiple')"
      :snippet="samples.array"
    >
      <MjCheckbox
        v-model="model.array"
        name="checkbox"
        :value="1"
      >
        1
      </MjCheckbox>

      <MjCheckbox
        v-model="model.array"
        name="checkbox"
        :value="2"
        class="ml-6"
      >
        2
      </MjCheckbox>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <MjCheckbox
        v-model="model.false"
        disabled
      >
        {{ $t('props.disabled') }}
      </MjCheckbox>

      <MjCheckbox
        v-model="model.true"
        disabled
        class="ml-6"
      >
        {{ $t('props.disabled') }}
      </MjCheckbox>
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
          `<MjCheckbox
  v-model="value"
  name="checkbox"
>
  Default
</MjCheckbox>`,
        ],
        array: [
          `<MjCheckbox
  v-model="value"
  name="checkbox"
  :value="1"
>
  1
</MjCheckbox>

<MjCheckbox
  v-model="value"
  name="checkbox"
  :value="2"
>
  2
</MjCheckbox>`,
        ],
        disabled: [
          `<MjCheckbox
  v-model="value"
  name="checkbox"
  disabled
>
  Disabled
</MjCheckbox>`,
        ],
      },
    };
  },
});
</script>
