<template>
  <LayoutSample
    :title="$t('sections.atoms.table.title')"
    :components="['Table', 'TableRow', 'TableCell']"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbTable>
        <BbTableHead>
          <BbTableTitle class="text-left bg-gray-100">
            {{ $t('examples.table.header.1') }}
          </BbTableTitle>
          <BbTableTitle class="text-left bg-gray-100">
            {{ $t('examples.table.header.2') }}
          </BbTableTitle>
          <BbTableTitle class="text-left bg-gray-100">
            {{ $t('examples.table.header.3') }}
          </BbTableTitle>
        </BbTableHead>
        <tbody>
          <BbTableRow
            v-for="(item, key) in $t('examples.table.row')"
            :key="key"
          >
            <BbTableCell>
              {{ item[1] }}
            </BbTableCell>
            <BbTableCell>
              {{ item[2] }}
            </BbTableCell>
            <BbTableCell>
              {{ item[3] }}
            </BbTableCell>
          </BbTableRow>
        </tbody>
      </BbTable>
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
