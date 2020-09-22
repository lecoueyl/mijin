<template>
  <LayoutSample
    :title="$t('sections.atoms.button.title')"
    component="Button"
  >
    <!-- <Sample
      v-for="(sampleArray, sampleName) in samples"
      :key="sampleName"
      :title="$t(`props.${sampleName}`)"
      :snippet="sampleArray"
    >
      {{ sampleName }}
      <div
        v-for="(sample, index) in sampleArray"
        :key="index"
        v-html="sample"
      />
    </Sample> -->

    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <bb-button>
        {{ $t('props.default') }}
      </bb-button>
    </Sample>

    <Sample
      :title="$t('props.secondary')"
      :snippet="samples.secondary"
    >
      <bb-button
        type="secondary"
      >
        {{ $t('props.secondary') }}
      </bb-button>
    </Sample>

    <Sample :title="$t('props.disabled')">
      <bb-button
        disabled
      >
        {{ $t('props.disabled') }}
      </bb-button>
    </Sample>

    <Sample
      :title="$t('props.icon')"
      :snippet="samples.icon"
    >
      <bb-button
        icon="test"
      >
        {{ $t('props.icon') }}
      </bb-button>

      <bb-button
        icon="test"
        icon-right
      >
        {{ $t('props.icon') }}
      </bb-button>

      <bb-button
        icon="test"
      />
    </Sample>

    <Sample
      :title="$t('props.link')"
      :snippet="samples.link"
    >
      <bb-button
        tag="nuxt-link"
        :to="localePath('/')"
        class="inline-block"
      >
        {{ $t('props.link') }}
      </bb-button>
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
          `<bb-button>
  Default
</bb-button>`,
        ],
        secondary: [
          `<bb-button type="secondary">
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
      },
    };
  },
});
</script>
