<template>
  <aside>
    <button
      class="mb-10 bg-gray-200 hover:bg-gray-300 py-2 pl-2 pr-4 rounded-full inline-flex items-center transition-colors duration-200 ease-in-out font-medium"
      @click="switchTheme()"
    >
      <!-- eslint-disable-next-line -->
      <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      {{ $t(`theme.${theme}`) }}
    </button>

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
            class="hover:text-primary-500 transition-colors duration-200 ease-in-out px-4 py-1 block rounded"
            active-class="text-primary-700 hover:text-primary-700  bg-primary-200"
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
      theme: 'light',
      // https://www.flexport.com/design/components
      // https://vercel.com/design/status-dot
      sections: {
        foundations: {
          colors: {},
          icons: {},
          layout: {},
          typography: {},
        },
        atoms: {
          button: {},
          checkbox: {},
          headline: {},
          icon: {},
          note: {},
          statusDot: {},
          tabs: {},
        },
      },
    };
  },

  mounted() {
    if (localStorage.getItem('theme')) this.theme = localStorage.getItem('theme') || this.theme;
    this.setTheme();
  },

  methods: {
    setTheme() {
      document.documentElement.setAttribute('data-theme', this.theme);
      localStorage.setItem('theme', this.theme);
    },

    switchTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      this.setTheme();
    },
  },
});
</script>
