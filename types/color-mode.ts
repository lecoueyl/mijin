import { ColorModeInstance } from '@nuxtjs/color-mode/types/color-mode';

declare module '@nuxt/types' {
  interface Context {
    $colorMode: ColorModeInstance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $colorMode: ColorModeInstance
  }
}
