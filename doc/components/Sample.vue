<template>
  <section>
    <BbHeadline
      :level="2"
      :size="4"
      class="pb-8"
    >
      Default
    </BbHeadline>

    <div class="p-4 border border-gray-300 rounded-md">
      <BbButton>Default</BbButton>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  // data() {
  //   return {
  //     theme: 'light',
  //     // https://www.flexport.com/design/components
  //     // https://vercel.com/design/status-dot
  //     sections: {
  //       foundations: {
  //         color: {},
  //         layout: {},
  //         typography: {},
  //       },
  //       atoms: {
  //         button: {},
  //         icon: {},
  //         statusDot: {},
  //       },
  //     },
  //   };
  // },
});
</script>
