<template>
  <LayoutSample
    :title="$t('sections.atoms.collapse.title')"
    components="Collapse"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.image"
    >
      <BbCollapse>
        {{ $t('props.default') }}
        <template v-slot:content>
          Hello Hello Hello Hello Hello Hello Hello Hello Hello
          Hello Hello Hello Hello Hello Hello Hello Hello Hello
          Hello Hello Hello Hello Hello Hello Hello Hello Hello
          Hello Hello Hello Hello Hello Hello Hello Hello Hello
        </template>
      </BbCollapse>
    </Sample>

    <Sample
      :title="$t('props.expended')"
      :snippet="samples.image"
    >
      <BbCollapse expended>
        {{ $t('props.expended') }}
        <template v-slot:content>
          Hello Hello Hello Hello Hello Hello Hello Hello Hello
          Hello Hello Hello Hello Hello Hello Hello Hello Hello
          Hello Hello Hello Hello Hello Hello Hello Hello Hello
          Hello Hello Hello Hello Hello Hello Hello Hello Hello
        </template>
      </BbCollapse>
    </Sample>

    <Sample
      :title="$t('props.iconPosition')"
      :snippet="samples.image"
    >
      <BbCollapse icon-left>
        {{ $t('props.expended') }}
        <template v-slot:content>
          Hello Hello Hello Hello Hello Hello Hello Hello Hello
          Hello Hello Hello Hello Hello Hello Hello Hello Hello
          Hello Hello Hello Hello Hello Hello Hello Hello Hello
          Hello Hello Hello Hello Hello Hello Hello Hello Hello
        </template>
      </BbCollapse>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      demo: {
        default: 0,
        disabled: 0,
      },
      samples: {
        image: [
          `<BbAvatar
  alt="image"
  img="https://..."
/>`,
        ],
      },
    };
  },
});
</script>
