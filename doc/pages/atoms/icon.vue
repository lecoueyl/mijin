<template>
  <LayoutSample
    :title="$t('sections.atoms.icon.title')"
    components="Icon"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbIcon name="user" />
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <div class="flex items-center">
        <BbIcon
          v-for="(size, index) in ['sm', 'lg']"
          :key="size"
          :size="size"
          :class="[{ 'ml-2': index !== 0 }]"
          name="mail"
        />
      </div>
    </Sample>

    <Sample
      :title="$t('props.variant')"
      :snippet="samples.variant"
    >
      <BbIcon
        name="play"
        variant="glyph"
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
        default: ['<BbIcon name="user" />'],
        size: [
          `<BbIcon
  name="mail"
  size="sm"
/>

<BbIcon
  name="mail"
  size="lg"
/>`,
        ],
        variant: [
          `<BbIcon
  name="play"
  variant="glyph"
/>`,
        ],
      },
    };
  },
});
</script>
