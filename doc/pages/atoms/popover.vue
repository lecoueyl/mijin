<template>
  <LayoutSample
    :title="$t('sections.atoms.popover.title')"
    components="Popover"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbPopover>
        <BbButton>
          Menu
        </BbButton>

        <template #content>
          <div class="bg-background shadow rounded-lg p-24 w-10 h-10" />
        </template>
      </BbPopover>
    </Sample>

    <Sample
      :title="$t('props.position')"
      :snippet="samples.position"
    >
      <div class="grid gap-4 sm:grid-cols-4">
        <BbPopover
          v-for="position in ['top', 'right', 'bottom', 'left']"
          :key="position"
          :position="position"
        >
          <BbButton>
            {{ position }}
          </BbButton>

          <template #content>
            <div class="bg-background shadow rounded-lg p-24 w-10 h-10" />
          </template>
        </BbPopover>
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
        defaulr: [
          `<BbPopover
  alt="image"
  img="https://..."
/>`,
        ],
      },
    };
  },
});
</script>
