<template>
  <aside>
    <section
      v-for="(section, sectionName, sectionIndex) in sections"
      :key="sectionName"
    >
      <h1
        class="pb-2 text-gray-600"
        :class="{ 'pt-8': sectionIndex != 0 }"
      >
        {{ sectionName }}
      </h1>

      <ul>
        <li
          v-for="(item, itemName) in section"
          :key="itemName"
        >
          <nuxt-link to="">
            {{ itemName }}
          </nuxt-link>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      // https://www.flexport.com/design/components
      // https://vercel.com/design/status-dot
      sections: {
        fundations: {
          color: {},
          typo: {},
          layout: {},
        },
        atoms: {
          button: {},
          icon: {},
          statusDot: {},
        },
      },
    };
  },
});
</script>
