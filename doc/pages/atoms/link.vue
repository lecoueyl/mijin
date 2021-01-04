<template>
  <LayoutSample
    :title="$t('sections.atoms.link.title')"
    components="Link"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjLink href="#">
        {{ $t('examples.link') }}
      </MjLink>
    </Sample>

    <Sample
      :title="$t('props.external')"
      :snippet="samples.external"
    >
      <MjLink
        external
        href="#"
      >
        {{ $t('examples.link') }}
      </MjLink>
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
        <MjLink
          :color="color[0]"
          :color-hover="color[1]"
          href="#"
        >
          {{ $t('examples.link') }}
        </MjLink>
      </div>
    </Sample>

    <Sample
      :title="$t('props.tag')"
      :snippet="samples.tag"
    >
      <MjLink
        tag="nuxt-link"
        to="/"
      >
        {{ $t('examples.link') }}
      </MjLink>
    </Sample>

    <Sample
      :title="$t('props.underline')"
      :snippet="samples.underline"
    >
      <MjLink
        href="#"
        underline
      >
        {{ $t('examples.link') }}
      </MjLink>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: [`<MjLink hred="#">
  ${this.$t('examples.link')}
</MjLink>`],
        external: [`<MjLink
  href="#"
  external
>
  ${this.$t('examples.link')}
</MjLink>`],
        color: [`<MjLink
  color="gray-700"
  color-hover="primary-500"
>
  ${this.$t('examples.link')}
</MjLink>

<MjLink
  color="red-500"
  color-hover="red-600"
>
  ${this.$t('examples.link')}
</MjLink>
`],
        tag: [`<MjLink
  tag="nuxt-link"
  to="/"
>
  ${this.$t('examples.link')}
</MjLink>`],
        underline: [`<MjLink
  underline
  href="#""
>
  ${this.$t('examples.link')}
</MjLink>`],
      },
    };
  },
});
</script>
