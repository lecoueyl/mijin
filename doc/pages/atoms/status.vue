<template>
  <LayoutSample
    :title="$t('sections.atoms.status.title')"
    components="Status"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjStatus
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
      <MjStatus
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
          `<MjAvatar
  alt="image"
  img="https://..."
/>`,
        ],
        letter: [
          '<MjAvatar letter="BB" />',
        ],
        size: [
          `<MjAvatar
  size="sm"
  letter="BB"
/>

<MjAvatar
  size="base"
  letter="BB"
/>

<MjAvatar
  size="lg"
  letter="BB"
/>

<MjAvatar
  size="xl"
  letter="BB"
/>`,
        ],
        variant: [
          `<MjAvatar
  alt="image"
  img="https://..."
  variant="squared"
/>`,
        ],
        color: [
          `<MjAvatar
  color="red"
  letter="BB"
/>

<MjAvatar
  color="blue"
  letter="BB"
/>

<MjAvatar
  color="green"
  letter="BB"
/>`,
        ],
      },
    };
  },
});
</script>
