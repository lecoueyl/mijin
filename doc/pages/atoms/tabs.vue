<template>
  <LayoutSample
    :title="$t('sections.atoms.tabs.title')"
    :components="['Tabs', 'TabsItem']"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjTabs>
        <MjTabsItem
          v-for="(item, key, index) in $t('examples.list')"
          :key="key"
          :selected="demo.default === index"
          @click="demo.default = index"
        >
          {{ item }}
        </MjTabsItem>
      </MjTabs>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <MjTabs>
        <MjTabsItem
          v-for="(item, key, index) in $t('examples.list')"
          :key="key"
          :selected="demo.disabled === index"
          :disabled="key !== 1"
        >
          {{ item }}
        </MjTabsItem>
      </MjTabs>
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
          `<MjTabs>
  <MjTabsItem selected>
    ${this.$t('examples.list.1')}
  </MjTabsItem>
  <MjTabsItem>
    ${this.$t('examples.list.2')}
  </MjTabsItem>
  <MjTabsItem>
    ${this.$t('examples.list.3')}
  </MjTabsItem>
</MjTabs>`,
        ],
        disabled: [
          `<MjTabs>
  <MjTabsItem selected>
    ${this.$t('examples.list.1')}
  </MjTabsItem>
  <MjTabsItem disabled>
    ${this.$t('examples.list.2')}
  </MjTabsItem>
  <MjTabsItem disabled>
    ${this.$t('examples.list.3')}
  </MjTabsItem>
</MjTabs>`,
        ],
      },
    };
  },
});
</script>
