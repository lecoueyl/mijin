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
          @click="demo.default = index"
        >
          {{ item }}
        </BbTabsItem>
      </BbTabs>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <BbTabs>
        <BbTabsItem
          v-for="(item, index) in $t('examples.array')"
          :key="item"
          :selected="demo.disabled === index"
          :disabled="index !== 0"
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
        disabled: 0,
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
       disabled: [
          `<BbTabs>
  <BbTabsItem selected>
    ${this.$t('examples.array')[0]}
  </BbTabsItem>
  <BbTabsItem disabled>
    ${this.$t('examples.array')[1]}
  </BbTabsItem>
  <BbTabsItem disabled>
    ${this.$t('examples.array')[2]}
  </BbTabsItem>
</BbTabs>`,
        ],
      },
    };
  },
});
</script>
