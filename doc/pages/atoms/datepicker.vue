<template>
  <LayoutSample
    :title="$t('sections.atoms.datepicker.title')"
    components="Datepicker"
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
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: [
          `<MjAvatar
  alt="image"
  img="https://..."
/>`],
      },
    };
  },
});
</script>
