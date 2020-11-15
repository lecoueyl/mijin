<template>
  <LayoutSample
    :title="$t('sections.atoms.status.title')"
    components="Status"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbStatus
        v-for="status in ['disabled', 'danger', 'error', 'valid', 'warning']"
        :key="status"
        :status="status"
        class="ml-2"
      />
    </Sample>

    <Sample
      :title="$t('props.icon')"
      :snippet="samples.icon"
    >
      <BbStatus
        v-for="status in ['disabled', 'danger', 'error', 'valid', 'warning']"
        :key="status"
        :status="status"
        variant="icon"
        class="ml-2"
      />
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        image: [
          `<BbAvatar
  alt="image"
  img="https://..."
/>`,
        ],
        letter: [
          '<BbAvatar letter="BB" />',
        ],
        size: [
          `<BbAvatar
  size="sm"
  letter="BB"
/>

<BbAvatar
  size="base"
  letter="BB"
/>

<BbAvatar
  size="lg"
  letter="BB"
/>

<BbAvatar
  size="xl"
  letter="BB"
/>`,
        ],
        variant: [
          `<BbAvatar
  alt="image"
  img="https://..."
  variant="squared"
/>`,
        ],
        color: [
          `<BbAvatar
  color="red"
  letter="BB"
/>

<BbAvatar
  color="blue"
  letter="BB"
/>

<BbAvatar
  color="green"
  letter="BB"
/>`,
        ],
      },
    };
  },
});
</script>
