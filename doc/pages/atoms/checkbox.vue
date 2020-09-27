<template>
  <LayoutSample
    :title="$t('sections.atoms.checkbox.title')"
    component="Checkbox"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <bb-checkbox v-model="model.default">
        {{ $t('props.default') }}
      </bb-checkbox>

      <bb-checkbox v-model="model.array" value="salut">
        {{ $t('props.default') }}
      </bb-checkbox>

      <bb-checkbox v-model="model.array" :value="2">
        {{ $t('props.default') }}
      </bb-checkbox>
      {{ model.default }}
      {{ model.array }}
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      model: {
        default: true,
        array: [2],
      },
      samples: {
        default: [
          `<bb-button>
  Default
</bb-button>`,
        ],
        secondary: [
          `<bb-button variant="secondary">
  Default
</bb-button>`,
        ],
        icon: [
          `<bb-button icon="test">
  Icon
</bb-button>

<bb-button
  icon="test"
  icon-right
>
  Icon
</bb-button>

<bb-button icon="test" />`,
        ],
        link: [
          `<bb-button
  tag="nuxt-link"
  to="/"
  class="inline-block""
>
  Link
</bb-button>`,
        ],
        size: [
          `<bb-button size="sm">
  Size
</bb-button>

<bb-button size="lg">
  Size
</bb-button>`,
        ],
      },
    };
  },
});
</script>
