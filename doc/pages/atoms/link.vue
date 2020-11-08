<template>
  <LayoutSample
    :title="$t('sections.atoms.link.title')"
    components="Link"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbLink href="#">
        {{ $t('examples.link') }}
      </BbLink>
    </Sample>

    <Sample
      :title="$t('props.external')"
      :snippet="samples.external"
    >
      <BbLink
        external
        href="#"
      >
        {{ $t('examples.link') }}
      </BbLink>
    </Sample>

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <div
        v-for="(color, index) in [['gray-700', 'primary-500'], ['red-500', 'red-600']]"
        :key="index"
        :class="[{ 'mt-6': index !== 0 }]"
      >
        <BbLink
          :color="color[0]"
          :color-hover="color[1]"
          href="#"
        >
          {{ $t('examples.link') }}
        </BbLink>
      </div>
    </Sample>

    <Sample
      :title="$t('props.tag')"
      :snippet="samples.tag"
    >
      <BbLink
        tag="nuxt-link"
        to="/"
      >
        {{ $t('examples.link') }}
      </BbLink>
    </Sample>

    <Sample
      :title="$t('props.underline')"
      :snippet="samples.underline"
    >
      <BbLink
        href="#"
        underline
      >
        {{ $t('examples.link') }}
      </BbLink>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: [`<BbLink hred="#">
  {{ $t('examples.link') }}
</BbLink>`],
        external: [`<BbLink
  href="#"
  external
>
  {{ $t('examples.link') }}
</BbLink>`],
        color: [`<BbLink
  color="gray-700"
  color-hover="primary-500"
>
  {{ $t('examples.link') }}
</BbLink>

<BbLink
  color="red-500"
  color-hover="red-600"
>
  {{ $t('examples.link') }}
</BbLink>
`],
        tag: [`<BbLink
  tag="nuxt-link"
  to="/"
>
  {{ $t('examples.link') }}
</BbLink>`],
        underline: [`<BbLink
  underline
  href="#""
>
  {{ $t('examples.link') }}
</BbLink>`],
      },
    };
  },
});
</script>
