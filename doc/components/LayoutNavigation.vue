<template>
  <aside class="w-full md:w-64 bg-white dark:bg-gray-900">
    <div class="flex items-center p-4 md:py-10 fixed md:static top-0 w-full z-50 bg-white dark:bg-gray-900">
      <button
        class="text-gray-900 dark:text-gray-50 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 py-2 pl-2 pr-2 md:pr-4 rounded-full inline-flex items-center
          transition-colors duration-200 ease-in-out font-medium focus:outline-none focus:ring-2 focus:ring-gray-500"
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

    <MjInput
      type="search"
      placeholder="Filter"
      class="mx-4"
    >
      <template #icon>
        <MjIcon name="search" />
      </template>
    </MjInput>

    <nav
      class="fixed md:static top-0 w-full md:block bg-white dark:bg-gray-900 pt-24 p-4 md:py-10 z-40 h-full md:h-auto overflow-y-scroll md:overflow-y-visible"
      :class="isOpen ? 'block': 'hidden'"
    >
      <ul class="pb-8 font-medium text-base lg:text-sm">
        <li
          v-for="(menu, menuName, menuIndex) in general"
          :key="menuName"
          :class="{ 'pt-4': menuIndex != 0 }"
        >
          <nuxt-link
            :to="localePath(menu.path)"
            exact
            class="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-200 ease-in-out flex items-center"
            active-class="text-primary-700 dark:text-primary-50 hover:text-primary-700 dark:hover:text-primary-50"
            @click.native="isOpen = false"
          >
            <!-- Iconly 2 https://ui8.net/piqodesign/products/iconly-essential-icons -->
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1"
            >
              <template v-if="menuName === 'setup'">
                <!-- eslint-disable-next-line -->
                <path class="text-primary-300" d="M16.6667 2H7.33333C3.92889 2 2 3.92889 2 7.33333V16.6667C2 20.0622 3.92 22 7.33333 22H16.6667C20.0711 22 22 20.0622 22 16.6667V7.33333C22 3.92889 20.0711 2 16.6667 2Z" />
                <!-- eslint-disable-next-line -->
                <path class="text-primary-600" d="M15.3205 12.7083H12.7495V15.257C12.7495 15.6673 12.4139 16 12 16C11.5861 16 11.2505 15.6673 11.2505 15.257V12.7083H8.67955C8.29342 12.6687 8 12.3461 8 11.9613C8 11.5765 8.29342 11.2539 8.67955 11.2143H11.2424V8.67365C11.2824 8.29088 11.6078 8 11.996 8C12.3842 8 12.7095 8.29088 12.7495 8.67365V11.2143H15.3205C15.7066 11.2539 16 11.5765 16 11.9613C16 12.3461 15.7066 12.6687 15.3205 12.7083Z" />
              </template>

              <template v-if="menuName === 'settings'">
                <!-- eslint-disable-next-line -->
                <path class="text-pink-300" d="M21.23 14.3701C21.0359 14.0701 20.7599 13.7701 20.4023 13.5801C20.1161 13.4401 19.9322 13.2101 19.7686 12.9401C19.2474 12.0801 19.554 10.9501 20.4227 10.4401C21.4447 9.8701 21.7717 8.6001 21.1789 7.6101L20.4942 6.4301C19.9117 5.4401 18.6343 5.0901 17.6225 5.6701C16.7232 6.1501 15.5684 5.8301 15.0472 4.9801C14.8837 4.7001 14.7917 4.4001 14.8121 4.1001C14.8428 3.7101 14.7202 3.3401 14.5362 3.0401C14.1581 2.4201 13.4734 2.0001 12.7171 2.0001H11.2762C10.5301 2.0201 9.84543 2.4201 9.46731 3.0401C9.27314 3.3401 9.16072 3.7101 9.18116 4.1001C9.2016 4.4001 9.10962 4.7001 8.94611 4.9801C8.42491 5.8301 7.2701 6.1501 6.381 5.6701C5.35904 5.0901 4.09181 5.4401 3.49908 6.4301L2.81437 7.6101C2.23185 8.6001 2.55888 9.8701 3.57062 10.4401C4.43928 10.9501 4.74587 12.0801 4.23489 12.9401C4.06116 13.2101 3.8772 13.4401 3.59106 13.5801C3.24359 13.7701 2.937 14.0701 2.77349 14.3701C2.39536 14.9901 2.4158 15.7701 2.79393 16.4201L3.49908 17.6201C3.8772 18.2601 4.58235 18.6601 5.31816 18.6601C5.66563 18.6601 6.07441 18.5601 6.40144 18.3601C6.65693 18.1901 6.96351 18.1301 7.30076 18.1301C8.3125 18.1301 9.16072 18.9601 9.18116 19.9501C9.18116 21.1001 10.1214 22.0001 11.3068 22.0001H12.6967C13.8719 22.0001 14.8121 21.1001 14.8121 19.9501C14.8428 18.9601 15.691 18.1301 16.7028 18.1301C17.0298 18.1301 17.3364 18.1901 17.6021 18.3601C17.9291 18.5601 18.3277 18.6601 18.6854 18.6601C19.411 18.6601 20.1161 18.2601 20.4942 17.6201L21.2096 16.4201C21.5775 15.7501 21.6082 14.9901 21.23 14.3701Z" />
                <!-- eslint-disable-next-line -->
                <path class="text-pink-600" d="M12.012 14.8301C10.4075 14.8301 9.10962 13.5801 9.10962 12.0101C9.10962 10.4401 10.4075 9.1801 12.012 9.1801C13.6165 9.1801 14.8837 10.4401 14.8837 12.0101C14.8837 13.5801 13.6165 14.8301 12.012 14.8301Z" />
              </template>
            </svg>
            {{ $t(`sections.general.${menuName}.title`) }}
          </nuxt-link>
        </li>
      </ul>

      <section
        v-for="(section, sectionName, sectionIndex) in sections"
        :key="sectionName"
      >
        <h1
          class="pb-2 text-gray-600 dark:text-gray-400"
          :class="{ 'pt-10': sectionIndex != 0 }"
        >
          {{ $t(`sections.${sectionName}.title`) }}
        </h1>

        <ul class="font-medium text-base lg:text-sm">
          <li
            v-for="(menu, menuName, menuIndex) in section"
            :key="menuName"
            :class="{ 'pt-2': menuIndex != 0 }"
          >
            <nuxt-link
              :to="localePath(`${sectionName}-${menuName}`)"
              class="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-200 ease-in-out px-4 py-1 block rounded
                focus:outline-none focus:ring-2 focus:ring-primary-500"
              active-class="text-primary-700 dark:text-primary-700 bg-primary-200 hover:text-primary-700 dark:hover:text-primary-700"
              @click.native="isOpen = false"
            >
              {{ $t(`sections.${sectionName}.${menuName}.title`) }}
              <MjTag
                v-if="menu.isBeta"
                size="sm"
              >
                beta
              </MjTag>
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
      general: {
        setup: {
          path: '/',
        },
        settings: {
          path: '/settings',
        },
      },
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
          chart: {
            isBeta: true,
          },
          checkbox: {},
          collapse: {},
          datepicker: {
            isBeta: true,
          },
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
