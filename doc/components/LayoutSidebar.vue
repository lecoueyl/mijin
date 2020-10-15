<template>
  <aside class="w-full md:max-w-xs bg-gray-100">
    <div class="flex items-center p-4 sm:p-10">
      <button
        class="bg-gray-200 hover:bg-gray-300 py-2 pl-2 pr-2 sm:pr-4 rounded-full inline-flex items-center
          transition-colors duration-200 ease-in-out font-medium"
        @click="switchTheme()"
      >
        <!-- eslint-disable-next-line -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>

        <span class="ml-2 hidden sm:inline-block">
          {{ $t(`theme.${this.$colorMode.preference}`) }}
        </span>
      </button>

      <div class="sm:hidden flex-1 text-right">
        <BbButton
          @click="isOpen = !isOpen"
        >
          <template v-slot:icon>
            <bb-icon name="calendar" />
          </template>
        </BbButton>
      </div>
    </div>

    <nav
      class="sm:mt-10 absolute sm:static w-full sm:block bg-gray-100 p-4 sm:p-10 z-50 shadow-xl sm:shadow-none"
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
// import * as ColorMode from '@nuxtjs/color-mode';

// // interface Vue {
// //   $colorMode: ColorModeOptions;
// // }

// declare module 'vue/types/vue' {
//   interface Vue {
//     $colorMode: typeof ColorMode
//   }
// }

export default Vue.extend({
  data() {
    return {
      isOpen: false,
      sections: {
        foundations: {
          colors: {},
          icons: {},
          layout: {},
          typography: {},
        },
        atoms: {
          avatar: {},
          button: {},
          checkbox: {},
          divider: {},
          headline: {},
          icon: {},
          link: {},
          note: {},
          skeleton: {},
          tabs: {},
          toggle: {},
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
