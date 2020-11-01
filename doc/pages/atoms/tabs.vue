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
          v-for="(item, key, index) in $t('examples.list')"
          :key="key"
          :selected="demo.default === index"
          @click="demo.default = index"
        >
          {{ item }}
          <BbBadge size="sm">
            99+
          </BbBadge>
        </BbTabsItem>
      </BbTabs>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <BbTabs>
        <BbTabsItem
          v-for="(item, key, index) in $t('examples.list')"
          :key="key"
          :selected="demo.disabled === index"
          :disabled="key !== 1"
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
    ${this.$t('examples.list.1')}
  </BbTabsItem>
  <BbTabsItem>
    ${this.$t('examples.list.2')}
  </BbTabsItem>
  <BbTabsItem>
    ${this.$t('examples.list.3')}
  </BbTabsItem>
</BbTabs>`,
        ],
        disabled: [
          `<BbTabs>
  <BbTabsItem selected>
    ${this.$t('examples.list.1')}
  </BbTabsItem>
  <BbTabsItem disabled>
    ${this.$t('examples.list.2')}
  </BbTabsItem>
  <BbTabsItem disabled>
    ${this.$t('examples.list.3')}
  </BbTabsItem>
</BbTabs>`,
        ],
      },
    };
  },
});
</script>
