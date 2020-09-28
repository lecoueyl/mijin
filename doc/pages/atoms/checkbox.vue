<template>
  <LayoutSample
    :title="$t('sections.atoms.checkbox.title')"
    component="Checkbox"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <bb-checkbox
        v-model="model.default"
        name="checkbox"
      >
        {{ $t('props.default') }}
      </bb-checkbox>
    </Sample>

    <Sample
      :title="$t('props.multiple')"
      :snippet="samples.array"
    >
      <bb-checkbox
        v-model="model.array"
        name="checkbox"
        :value="1"
      >
        1
      </bb-checkbox>

      <bb-checkbox
        v-model="model.array"
        name="checkbox"
        :value="2"
        class="ml-6"
      >
        2
      </bb-checkbox>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <bb-checkbox
        v-model="model.false"
        disabled
      >
        {{ $t('props.disabled') }}
      </bb-checkbox>

      <bb-checkbox
        v-model="model.true"
        disabled
        class="ml-6"
      >
        {{ $t('props.disabled') }}
      </bb-checkbox>
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
          `<bb-checkbox
  v-model="value"
  name="checkbox"
>
  Default
</bb-checkbox>`,
        ],
        array: [
          `<bb-checkbox
  v-model="value"
  name="checkbox"
  :value="1"
>
  1
</bb-checkbox>

<bb-checkbox
  v-model="value"
  name="checkbox"
  :value="2"
>
  2
</bb-checkbox>`,
        ],
        disabled: [
          `<bb-checkbox
  v-model="value"
  name="checkbox"
  disabled
>
  Disabled
</bb-checkbox>`,
        ],
      },
    };
  },

  methods: {
    onChange() {
      console.log('test');
    },
  },
});
</script>
