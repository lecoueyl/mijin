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
      <BbLink
        v-for="(color, index) in [['foreground', 'primary-500']]"
        :key="index"
        :color="color[0]"
        :color-hover="color[1]"
        :class="[{ 'mt-6': index !== 0 }]"
      />
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: ['<BbLink hred="#" />'],
        external: [`<BbLink
  href="#"
  external
/>`],
        color: [`<BbLink color="primary-500" />

<BbLink color="red-300" />

<BbLink color="yellow-500" />`],
      },
    };
  },
});
</script>
