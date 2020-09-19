<template>
  <div>
    <div>
      <Headline
        :level="1"
        :size="2"
        class="pb-8"
      >
        Fundations
      </Headline>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div class="p-4 border border-gray-300 rounded-md">
          Test
        </div>
        <!-- ... -->
        <div>9</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Headline } from '../../lib/index';

export default Vue.extend({
  components: {
    Headline,
  },
});
</script>
