<template>
  <aside class="w-full md:max-w-xs bg-gray-100">
    <div class="flex items-center p-4 md:p-10 fixed md:static top-0 w-full z-50 bg-gray-100">
      <button
        class="bg-gray-200 hover:bg-gray-300 py-2 pl-2 pr-2 md:pr-4 rounded-full inline-flex items-center
          transition-colors duration-200 ease-in-out font-medium"
        @click="switchTheme()"
      >
        <!-- Icon from https://heroicons.com -->
        <!-- eslint-disable-next-line -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>

        <span class="ml-2 hidden md:inline-block">
          {{ $t(`theme.${this.$colorMode.preference}`) }}
        </span>
      </button>

      <div class="md:hidden flex-1 text-right">
        <button
          class="bg-primary-500 text-primary-100 hover:bg-primary-600 py-2 pl-2 pr-2 md:pr-4 rounded-md inline-flex items-center
            transition-colors duration-200 ease-in-out font-medium"
          @click="isOpen = !isOpen"
        >
          <!-- Icon from https://heroicons.com -->
          <!-- eslint-disable-next-line -->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </div>

    <nav
      class="pt-24 md:pt-6 md:pb-6 fixed md:static top-0 w-full md:block bg-gray-100 p-4 md:p-10 z-40 h-full md:h-auto overflow-y-scroll md:overflow-y-visible"
      :class="isOpen ? 'block': 'hidden'"
    >
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
              @click.native="isOpen = false"
            >
              {{ $t(`sections.${sectionName}.${menuName}.title`) }}
            </nuxt-link>
          </li>
        </ul>
      </section>
    </nav>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      isOpen: false,
      sections: {
        foundations: {
          colors: {},
          icons: {},
          layout: {},
        },

        atoms: {
          avatar: {},
          badge: {},
          button: {},
          chart: {},
          checkbox: {},
          collapse: {},
          datepicker: {},
          divider: {},
          headline: {},
          icon: {},
          input: {},
          link: {},
          list: {},
          modal: {},
          note: {},
          popover: {},
          progress: {},
          radio: {},
          select: {},
          skeleton: {},
          status: {},
          table: {},
          tabs: {},
          tag: {},
          textarea: {},
          toggle: {},
        },

        organisms: {
          form: {},
          popover: {},
        },
      },
    };
  },

  methods: {
    switchTheme() {
      this.$colorMode.preference = this.$colorMode.preference === 'light' ? 'dark' : 'light';
    },
  },
});
</script>
