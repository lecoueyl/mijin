<template>
  <LayoutSample
    :title="$t('sections.foundations.colors.title')"
  >
    <BbHeadline
      id="Primary"
      :level="2"
      :size="3"
      class="pb-8"
    >
      Primary
    </BbHeadline>

    <SampleColor
      name="primary"
      :color="colors.primary"
    />

    <BbHeadline
      id="gray"
      :level="2"
      :size="3"
      class="pt-8 pb-8"
    >
      Gray
    </BbHeadline>

    <SampleColor
      name="gray"
      :color="colors.gray"
    />

    <BbHeadline
      id="accents"
      :level="2"
      :size="3"
      class="pt-8"
    >
      Accents
    </BbHeadline>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="name in ['blue', 'green', 'yellow', 'red']"
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
import tailwindConfig from '../../../tailwind.config';

export default Vue.extend({
  data() {
    return {
      colors: tailwindConfig.theme.extend.colors,
    };
  },
});
</script>
