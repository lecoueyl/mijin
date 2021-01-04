<template>
  <LayoutSample
    :title="$t('sections.atoms.table.title')"
    :components="['Table', 'TableCell', 'TableRow', 'TableTitle']"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjTable>
        <MjTableHead>
          <MjTableTitle class="bg-white dark:bg-gray-900">
            {{ $t('examples.table.header.1') }}
          </MjTableTitle>

          <MjTableTitle class="bg-white dark:bg-gray-900">
            {{ $t('examples.table.header.2') }}
          </MjTableTitle>

          <MjTableTitle class="bg-white dark:bg-gray-900">
            {{ $t('examples.table.header.3') }}
          </MjTableTitle>
        </MjTableHead>

        <MjTableBody>
          <MjTableRow
            v-for="(item, key) in $t('examples.table.row')"
            :key="key"
          >
            <MjTableCell>
              {{ item[1] }}
            </MjTableCell>

            <MjTableCell>
              {{ item[2] }}
            </MjTableCell>

            <MjTableCell text-align="right">
              {{ item[3] }}
            </MjTableCell>
          </MjTableRow>
        </MjTableBody>
      </MjTable>
    </Sample>

    <Sample
      :title="$t('props.fixed')"
      :snippet="samples.fixed"
    >
      <MjTable fixed>
        <MjTableHead>
          <MjTableTitle class="bg-white dark:bg-gray-900 w-2/12">
            {{ $t('examples.table.header.1') }}
          </MjTableTitle>

          <MjTableTitle class="bg-white dark:bg-gray-900">
            {{ $t('examples.table.header.2') }}
          </MjTableTitle>

          <MjTableTitle
            text-align="right"
            class="bg-white dark:bg-gray-900 w-1/12"
          >
            {{ $t('examples.table.header.3') }}
          </MjTableTitle>
        </MjTableHead>

        <MjTableBody>
          <MjTableRow
            v-for="(item, key) in $t('examples.table.row')"
            :key="key"
          >
            <MjTableCell>
              {{ item[1] }}
            </MjTableCell>

            <MjTableCell>
              {{ item[2] }}
            </MjTableCell>

            <MjTableCell text-align="right">
              {{ item[3] }}
            </MjTableCell>
          </MjTableRow>
        </MjTableBody>
      </MjTable>
    </Sample>

    <Sample
      :title="$t('props.truncate')"
      :snippet="samples.default"
    >
      <MjTable fixed>
        <MjTableHead>
          <MjTableTitle class="bg-white dark:bg-gray-900 w-2/12">
            {{ $t('examples.table.header.1') }}
          </MjTableTitle>

          <MjTableTitle class="bg-white dark:bg-gray-900">
            {{ $t('examples.table.header.2') }}
          </MjTableTitle>

          <MjTableTitle
            text-align="right"
            class="bg-white dark:bg-gray-900 w-1/12"
          >
            {{ $t('examples.table.header.3') }}
          </MjTableTitle>
        </MjTableHead>

        <MjTableBody>
          <MjTableRow
            v-for="(item, key) in $t('examples.table.row')"
            :key="key"
          >
            <MjTableCell>
              {{ item[1] }}
            </MjTableCell>

            <MjTableCell truncate>
              {{ item[2] }}
            </MjTableCell>

            <MjTableCell text-align="right">
              {{ item[3] }}
            </MjTableCell>
          </MjTableRow>
        </MjTableBody>
      </MjTable>
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
          `<MjTable>
  <MjTableHead>
    <MjTableTitle class="bg-white dark:bg-gray-900">
      ${this.$t('examples.table.header.1')}
    </MjTableTitle>
    <MjTableTitle class="bg-white dark:bg-gray-900">
      ${this.$t('examples.table.header.2')}
    </MjTableTitle>
    <MjTableTitle class="bg-white dark:bg-gray-900">
      ${this.$t('examples.table.header.3')}
    </MjTableTitle>
  </MjTableHead>
  <TableBody>
    <MjTableRow>
      <MjTableCell>
        ${this.$t('examples.table.row.1.1')}
      </MjTableCell>
      <MjTableCell>
        ${this.$t('examples.table.row.1.2')}
      </MjTableCell>
      <MjTableCell>
        ${this.$t('examples.table.row.1.3')}
      </MjTableCell>
    </MjTableRow>
    <MjTableRow>
      <MjTableCell>
        ${this.$t('examples.table.row.2.1')}
      </MjTableCell>
      <MjTableCell>
        ${this.$t('examples.table.row.2.2')}
      </MjTableCell>
      <MjTableCell>
        ${this.$t('examples.table.row.2.3')}
      </MjTableCell>
    </MjTableRow>
  </TableBody>
</MjTable>`,
        ],
      },
    };
  },
});
</script>
