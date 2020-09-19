<template>
  <aside>
    <section
      v-for="(section, sectionName, sectionIndex) in sections"
      :key="sectionName"
    >
      <h1
        class="pb-2 text-gray-600"
        :class="{ 'pt-10': sectionIndex != 0 }"
      >
        {{ $t(`sections.${sectionName}.title`) }}
      </h1>

      <ul>
        <li
          v-for="(menu, menuName, menuIndex) in section"
          :key="menuName"
          :class="{ 'pt-2': menuIndex != 0 }"
        >
          <nuxt-link
            :to="localePath(`${sectionName}-${menuName}`)"
            class="hover:text-primary-500 transition-colors duration-100 ease-in-out px-2 py-1 block"
            active-class="text-primary-700 hover:text-primary-700  bg-primary-200 rounded"
          >
            {{ $t(`sections.${sectionName}.${menuName}.title`) }}
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
        foundations: {
          color: {},
          layout: {},
          typography: {},
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
