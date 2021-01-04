<template>
  <LayoutSample
    :title="$t('sections.foundations.colors.title')"
  >
    <MjHeadline
      id="primary"
      :level="2"
      :size="3"
      class="pb-8"
    >
      {{ $t('sections.foundations.colors.primary') }}
    </MjHeadline>

    <SampleColor
      name="primary"
      :color="colors.primary"
    />

    <MjHeadline
      id="shades"
      :level="2"
      :size="3"
      class="pt-8 pb-8"
    >
      {{ $t('sections.foundations.colors.gray') }}
    </MjHeadline>

    <SampleColor
      name="gray"
      :color="colors.gray"
    />

    <MjHeadline
      id="contrast"
      :level="2"
      :size="3"
      class="pt-8 pb-8"
    >
      {{ $t('sections.foundations.colors.contrast') }}
    </MjHeadline>

    <div class="bg-white text-black p-3 rounded-t-lg border-t border-r border-l border-gray-100">
      white
    </div>

    <div class="bg-black text-white p-3 rounded-b-lg border-r border-b border-l border-gray-100">
      black
    </div>

    <MjHeadline
      id="accents"
      :level="2"
      :size="3"
      class="pt-8"
    >
      {{ $t('sections.foundations.colors.accents') }}
    </MjHeadline>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="name in ['blue', 'green', 'yellow', 'red', 'indigo', 'purple', 'teal', 'pink']"
        :key="name"
      >
        <MjHeadline
          :level="3"
          :size="4"
          class="py-8 capitalize"
        >
          {{ name }}
        </MjHeadline>

        <SampleColor
          :name="name"
          :color="colors[name]"
        />
      </div>
    </div>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';
import tailwindPreset from '../../../src/tailwind-preset';

export default Vue.extend({
  data() {
    return {
      colors: tailwindPreset.theme.colors,
    };
  },
});
</script>
