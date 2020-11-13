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
          'translate-y-0': position === 'top' && isOpen,
          'translate-y-1': position === 'top' && !isOpen,
          // position-right
          'left-full pl-2': position === 'right',
          'translate-x-0': position === 'right' && isOpen,
          '-translate-x-1': position === 'right' && !isOpen,
          // position-bottom
          'top-full bottom-0 pt-2': position === 'bottom',
          'translate-y-0': position === 'bottom' && isOpen,
          '-translate-y-1': position === 'bottom' && !isOpen,
          // position-left
          'right-full pr-2': position === 'left',
          'translate-x-0': position === 'left' && isOpen,
          'translate-x-1': position === 'left' && !isOpen,
        },
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      ]"
      @click="dismissible ? close() : null"
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

    dismissible: {
      type: Boolean,
      default: false,
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
      isOpen: false,
    };
  },
  methods: {
    close() {
      this.isOpen = false;
      this.$emit('close');
    },

    open() {
      this.isOpen = true;
      this.$emit('open');
    },

    toggle() {
      this.isOpen = !this.isOpen;
      this.$emit('toggle', this.isOpen);
    },
  },
};
</script>
