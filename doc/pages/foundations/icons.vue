<template>
  <LayoutSample
    :title="$t('sections.foundations.icons.title')"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      <Icon
        v-for="(icon, iconName) in icons.stroke"
        :key="iconName"
        :name="iconName"
        :svg="icon"
      />
    </div>
  </LayoutSample>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  computed: {
    icons() {
      return this.$root?.$options?.components.MjIcon?.options?.data()?.icons || [];
    },
  },
});
</script>
