<template>
  <LayoutSample
    :title="$t('sections.atoms.tabs.title')"
    :components="['Tabs', 'TabsItem']"
  >
    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <BbTabs>
        <BbTabsItem
          v-for="(item, index) in $t('examples.array')"
          :key="item"
          :selected="demo.default === index"
          :class="{ 'ml-4': index !== 0 }"
          @click="demo.default = index"
        >
          {{ item }}
        </BbTabsItem>
      </BbTabs>
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
      },
      samples: {
        size: [
          `<BbHeadline size="1">
  Size 1
</BbButton>

<BbHeadline size="2">
  Size 2
</BbButton>

<BbHeadline size="3">
  Size 3
</BbButton>

<BbHeadline size="4">
  Size 4
</BbButton>`,
        ],
        level: [
          `<BbHeadline level="1">
  H1
</BbButton>

<BbHeadline level="2">
  H2
</BbButton>

<BbHeadline level="3">
  H3
</BbButton>

<BbHeadline level="4">
  H4
</BbButton>`,
        ],
      },
    };
  },
});
</script>
