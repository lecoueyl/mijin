<template>
  <LayoutSample
    :title="$t('sections.atoms.popover.title')"
    components="Popover"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbPopover align="left">
        <BbButton>
          {{ $t('props.default') }}
        </BbButton>

        <template #content>
          <div class="bg-background shadow rounded-lg p-10" />
        </template>
      </BbPopover>
    </Sample>

    <Sample
      :title="$t('props.position')"
      :snippet="samples.position"
    >
      <div class="grid gap-4 sm:grid-cols-4">
        <div
          v-for="position in ['top', 'right', 'bottom', 'left']"
          :key="position"
        >
          <BbPopover
            :position="position"
          >
            <BbButton>
              {{ position }}
            </BbButton>

            <template #content>
              <div class="bg-background shadow rounded-lg p-10" />
            </template>
          </BbPopover>
        </div>
      </div>
    </Sample>

    <Sample
      :title="$t('props.align')"
      :snippet="samples.position"
    >
      <div class="grid gap-4 sm:grid-cols-3">
        <div
          v-for="props in [
            {
              align: 'left',
              position: 'bottom',
            },
            {
              align: 'center',
              position: 'bottom',
            },
            {
              align: 'right',
              position: 'bottom',
            },
            {
              align: 'left',
              position: 'top',
            },
            {
              align: 'center',
              position: 'top',
            },
            {
              align: 'right',
              position: 'top',
            },
            {
              align: 'top',
              position: 'left',
            },
            {
              align: 'middle',
              position: 'left',
            },
            {
              align: 'bottom',
              position: 'left',
            },
            {
              align: 'top',
              position: 'right',
            },
            {
              align: 'middle',
              position: 'right',
            },
            {
              align: 'bottom',
              position: 'right',
            },
          ]"
          :key="`${props.position}-${props.align}`"
        >
          <BbPopover
            :align="props.align"
            :position="props.position"
          >
            <BbButton>
              {{ props.position }} / {{ props.align }}
            </BbButton>

            <template #content>
              <div class="bg-background shadow rounded-lg p-10" />
            </template>
          </BbPopover>
        </div>
      </div>
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
          `<BbPopover align="left">
  <BbButton>
    ${this.$t('props.default')}
  </BbButton>

  <template #content>
    <div class="bg-background shadow rounded-lg p-10" />
  </template>
</BbPopover>`,
        ],
      },
    };
  },
});
</script>
