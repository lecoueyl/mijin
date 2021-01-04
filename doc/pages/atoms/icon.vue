<template>
  <LayoutSample
    :title="$t('sections.atoms.icon.title')"
    components="Icon"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjIcon name="user" />
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <div class="flex items-center">
        <MjIcon
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
      <MjIcon
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
        default: ['<MjIcon name="user" />'],
        size: [
          `<MjIcon
  name="mail"
  size="sm"
/>

<MjIcon
  name="mail"
  size="lg"
/>`,
        ],
        variant: [
          `<MjIcon
  name="play"
  variant="glyph"
/>`,
        ],
      },
    };
  },
});
</script>
