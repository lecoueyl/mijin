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
          <BbTableTitle class="bg-gray-100">
            {{ $t('examples.table.header.1') }}
          </BbTableTitle>

          <BbTableTitle class="bg-gray-100">
            {{ $t('examples.table.header.2') }}
          </BbTableTitle>

          <BbTableTitle class="bg-gray-100">
            {{ $t('examples.table.header.3') }}
          </BbTableTitle>
        </BbTableHead>

        <BbTableBody>
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
        </BbTableBody>
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
          `<BbTable>
<BbTableHead>
  <BbTableTitle class="bg-gray-100">
    ${this.$t('examples.table.header.1')}
  </BbTableTitle>
  <BbTableTitle class="bg-gray-100">
    ${this.$t('examples.table.header.2')}
  </BbTableTitle>
  <BbTableTitle class="bg-gray-100">
    ${this.$t('examples.table.header.3')}
  </BbTableTitle>
</BbTableHead>
<TableBody>
  <BbTableRow>
    <BbTableCell>
      ${this.$t('examples.table.row.1.1')}
    </BbTableCell>
    <BbTableCell>
      ${this.$t('examples.table.row.1.2')}
    </BbTableCell>
    <BbTableCell>
      ${this.$t('examples.table.row.1.3')}
    </BbTableCell>
  </BbTableRow>
  <BbTableRow>
    <BbTableCell>
      ${this.$t('examples.table.row.2.1')}
    </BbTableCell>
    <BbTableCell>
      ${this.$t('examples.table.row.2.2')}
    </BbTableCell>
    <BbTableCell>
      ${this.$t('examples.table.row.2.3')}
    </BbTableCell>
  </BbTableRow>
</TableBody>
</BbTable>`,
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
