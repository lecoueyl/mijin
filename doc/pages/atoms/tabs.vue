<template>
  <LayoutSample
    :title="$t('sections.atoms.tabs.title')"
    :components="['Tabs', 'TabsItem']"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbTabs>
        <BbTabsItem
          v-for="(item, index) in $t('examples.array')"
          :key="item"
          :selected="demo.default === index"
          :class="{ 'ml-4': index !== 0 }"
          disabled
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
        default: [
          `<BbTabs>
  <BbTabsItem selected>
    ${this.$t('examples.array')[0]}
  </BbTabsItem>
  <BbTabsItem>
    ${this.$t('examples.array')[1]}
  </BbTabsItem>
  <BbTabsItem>
    ${this.$t('examples.array')[2]}
  </BbTabsItem>
</BbTabs>`,
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
