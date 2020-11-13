<template>
  <LayoutSample
    :title="$t('sections.atoms.table.title')"
    :components="['Table', 'TableCell', 'TableRow', 'TableTitle']"
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

            <BbTableCell text-align="right">
              {{ item[3] }}
            </BbTableCell>
          </BbTableRow>
        </BbTableBody>
      </BbTable>
    </Sample>

    <Sample
      :title="$t('props.fixed')"
      :snippet="samples.default"
    >
      <BbTable fixed>
        <BbTableHead>
          <BbTableTitle class="bg-gray-100 w-2/12">
            {{ $t('examples.table.header.1') }}
          </BbTableTitle>

          <BbTableTitle class="bg-gray-100">
            {{ $t('examples.table.header.2') }}
          </BbTableTitle>

          <BbTableTitle
            text-align="right"
            class="bg-gray-100 w-1/12"
          >
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

            <BbTableCell text-align="right">
              {{ item[3] }}
            </BbTableCell>
          </BbTableRow>
        </BbTableBody>
      </BbTable>
    </Sample>

    <Sample
      :title="$t('props.truncate')"
      :snippet="samples.default"
    >
      <BbTable fixed>
        <BbTableHead>
          <BbTableTitle class="bg-gray-100 w-2/12">
            {{ $t('examples.table.header.1') }}
          </BbTableTitle>

          <BbTableTitle class="bg-gray-100">
            {{ $t('examples.table.header.2') }}
          </BbTableTitle>

          <BbTableTitle
            text-align="right"
            class="bg-gray-100 w-1/12"
          >
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

            <BbTableCell truncate>
              {{ item[2] }}
            </BbTableCell>

            <BbTableCell text-align="right">
              {{ item[3] }}
            </BbTableCell>
          </BbTableRow>
        </BbTableBody>
      </BbTable>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
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
      },
    };
  },
});
</script>
