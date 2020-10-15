<template>
  <LayoutSample
    :title="$t('sections.atoms.toggle.title')"
    components="Toggle"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbToggle
        v-model="model.default"
        name="Toggle"
      >
        {{ $t('props.default') }}
      </BbToggle>
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
          `<BbToggle
  v-model="value"
  name="Toggle"
>
  Default
</BbToggle>`,
        ],
        array: [
          `<BbToggle
  v-model="value"
  name="Toggle"
  :value="1"
>
  1
</BbToggle>

<BbToggle
  v-model="value"
  name="Toggle"
  :value="2"
>
  2
</BbToggle>`,
        ],
        disabled: [
          `<BbToggle
  v-model="value"
  name="Toggle"
  disabled
>
  Disabled
</BbToggle>`,
        ],
      },
    };
  },
});
</script>
