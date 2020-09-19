<template>
  <div>
    <Headline
      :level="1"
      :size="2"
      class="pb-8"
    >
      Button
    </Headline>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Headline } from '../../../lib/index';

export default Vue.extend({
  components: {
    Headline,
  },
});
</script>
