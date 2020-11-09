<template>
  <div
    class="inline-block"
  >
    <div
      v-click-outside="close"
      class="relative"
    >
      <div @click="toggle">
        <slot />
      </div>

      <div
        class="absolute transform transition duration-150 z-40"
        :class="[
          {
            // align
            'c-popover--align-center': align === 'center',
            'left-0': align === 'left',
            'c-popover--align-middle': align === 'middle',
            'right-0': align === 'right',

            // position
            'top-full bottom-0 pt-2': position === 'bottom',
            'translate-y-0': position === 'bottom' && isVisible,
            '-translate-y-1': position === 'bottom' && !isVisible,

            'right-full left-0 pr-2': position === 'left',
            'translate-x-0': position === 'left' && isVisible,
            'translate-x-1': position === 'left' && !isVisible,

            'right-0 left-full pl-2': position === 'right',
            'translate-x-0': position === 'right' && isVisible,
            '-translate-x-1': position === 'right' && !isVisible,

            'top-0 pb-2': position === 'top',
            'translate-y-0': position === 'top' && isVisible,
            'translate-y-1': position === 'top' && !isVisible,
          },
          isVisible ? 'visible' : 'invisible'
        ]"
        @click="closeIfLink($event)"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from '../../directives/clickOutside';

export default {
  name: 'UiPopover',
  directives: {
    ClickOutside,
  },
  props: {
    align: {
      type: String,
      default: null,
      validator: (value) => [
        'center',
        'left',
        'middle',
        'right',
      ].includes(value),
    },
    position: {
      default: 'bottom',
      type: String,
      validator: (value) => [
        'top',
        'right',
        'bottom',
        'left',
      ].includes(value),
    },
    size: {
      type: String,
      default: null,
      validator: (value) => [
        'xs',
        'base',
        'lg',
      ].includes(value),
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
    close() {
      this.isVisible = false;
    },
    closeIfLink(event) {
      if (event.target.tagName === 'A') {
        this.close();
      }
    },
  },
};
</script>
