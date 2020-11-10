<template>
  <div
    v-click-outside="close"
    class="inline-block relative"
  >
    <div
      class="inline-block"
      @click="toggle"
    >
      <slot />
    </div>

    <div
      class="absolute transform transition-all duration-150 z-40"
      :class="[
        {
          // align-left
          'left-0': align === 'left' && ['bottom', 'top'].includes(position),
          // align-center
          'left-1/2 -translate-x-1/2': align === 'center' && ['bottom', 'top'].includes(position),
          // align-right
          'right-0': align === 'right' && ['bottom', 'top'].includes(position),
          // align-top
          'top-0': align === 'top' && ['left', 'right'].includes(position),
          // align-middle
          '-translate-y-1/2 top-1/2': align === 'middle' && ['left', 'right'].includes(position),
          // align-bottom
          'bottom-0': align === 'bottom' && ['left', 'right'].includes(position),

          // position-top
          'bottom-full pb-2': position === 'top',
          'translate-y-0': position === 'top' && isVisible,
          'translate-y-1': position === 'top' && !isVisible,
          // position-right
          'left-full pl-2': position === 'right',
          'translate-x-0': position === 'right' && isVisible,
          '-translate-x-1': position === 'right' && !isVisible,
          // position-bottom
          'top-full bottom-0 pt-2': position === 'bottom',
          'translate-y-0': position === 'bottom' && isVisible,
          '-translate-y-1': position === 'bottom' && !isVisible,
          // position-left
          'right-full pr-2': position === 'left',
          'translate-x-0': position === 'left' && isVisible,
          'translate-x-1': position === 'left' && !isVisible,
        },
        isVisible ? 'visible opacity-100' : 'invisible opacity-0'
      ]"
    >
      <slot name="content" />
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
      default: 'center',
      validator: (value) => [
        'bottom',
        'center',
        'left',
        'middle',
        'right',
        'top',
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
    close() {
      this.isVisible = false;
    },

    show() {
      this.isVisible = true;
    },

    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>
