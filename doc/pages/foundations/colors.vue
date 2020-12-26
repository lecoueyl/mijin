<template>
  <LayoutSample
    :title="$t('sections.foundations.colors.title')"
  >
    <BbHeadline
      id="primary"
      :level="2"
      :size="3"
      class="pb-8"
    >
      {{ $t('sections.foundations.colors.primary') }}
    </BbHeadline>

    <SampleColor
      name="primary"
      :color="colors.primary"
    />

    <BbHeadline
      id="shades"
      :level="2"
      :size="3"
      class="pt-8 pb-8"
    >
      {{ $t('sections.foundations.colors.shades') }}
    </BbHeadline>

    <div class="bg-background p-3 rounded-full border-gray-200">
      background
    </div>

    <SampleColor
      name="gray"
      :color="colors.gray"
    />

    <div class="bg-foreground text-background p-3 rounded-full border border-foreground">
      foreground
    </div>

    <BbHeadline
      id="contrast"
      :level="2"
      :size="3"
      class="pt-8 pb-8"
    >
      {{ $t('sections.foundations.colors.contrast') }}
    </BbHeadline>

    <div class="bg-white text-black p-3 rounded-t-lg border border-foreground">
      white
    </div>

    <div class="bg-black text-white p-3 rounded-b-lg border border-foreground">
      black
    </div>

    <BbHeadline
      id="accents"
      :level="2"
      :size="3"
      class="pt-8"
    >
      {{ $t('sections.foundations.colors.accents') }}
    </BbHeadline>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="name in ['blue', 'green', 'yellow', 'red', 'indigo', 'purple', 'teal', 'pink']"
        :key="name"
      >
        <BbHeadline
          :level="3"
          :size="4"
          class="py-8 capitalize"
        >
          {{ name }}
        </BbHeadline>

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
      shades: {
        // background: tailwindPreset.theme.extend.colors.background,
        ...tailwindPreset.theme.colors.gray,
        // foreground: tailwindPreset.theme.extend.colors.foreground,
      },
    };
  },
});
</script>
