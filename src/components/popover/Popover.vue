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
      class="fixed w-full sm:w-auto bottom-0 left-0 right-0 sm:p-0 sm:absolute transform transition-all z-40"
      :class="[
        {
          // align-left
          'sm:left-0 sm:right-auto': align === 'left' && ['bottom', 'top'].includes(position),
          // align-center
          'sm:left-1/2 sm:right-auto sm:-translate-x-1/2': align === 'center' && ['bottom', 'top'].includes(position),
          // align-right
          'sm:right-0 sm:left-auto': align === 'right' && ['bottom', 'top'].includes(position),
          // align-top
          'sm:top-0 sm:bottom-auto': align === 'top' && ['left', 'right'].includes(position),
          // align-middle
          'sm:-translate-y-1/2 sm:top-1/2 sm:bottom-auto': align === 'middle' && ['left', 'right'].includes(position),
          // align-bottom
          'sm:bottom-0': align === 'bottom' && ['left', 'right'].includes(position),

          // position-top
          'sm:bottom-full sm:pb-2': position === 'top',
          'sm:translate-y-0': position === 'top' && isOpen,
          'sm:translate-y-1': position === 'top' && !isOpen,
          // position-right
          'sm:left-full sm:pl-2': position === 'right',
          'sm:translate-x-0 sm:translate-y-0': position === 'right' && isOpen,
          'sm:-translate-x-1 sm:translate-y-0': position === 'right' && !isOpen,
          // position-bottom
          'sm:top-full sm:bottom-0 sm:pt-2': position === 'bottom',
          'sm:translate-y-0': position === 'bottom' && isOpen,
          'sm:-translate-y-1': position === 'bottom' && !isOpen,
          // position-left
          'sm:right-full sm:left-auto sm:pr-2': position === 'left',
          'sm:translate-x-0 sm:translate-y-0 sm:left-auto sm:right-auto': position === 'left' && isOpen,
          'sm:translate-x-1 sm:translate-y-0 sm:left-auto sm:right-auto': position === 'left' && !isOpen,
        },
        isOpen ? 'visible opacity-100 translate-y-0 ease-out duration-150' : 'invisible opacity-0 translate-y-full ease-in duration-100'
      ]"
      @click="dismissible ? close() : null"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import ClickOutside from '../../directives/clickOutside';

const validator = {
  align: [
    'bottom',
    'center',
    'left',
    'middle',
    'right',
    'top',
  ],
  position: [
    'bottom',
    'left',
    'right',
    'top',
  ],
};

export default {
  name: 'MijinPopover',

  validator,

  directives: {
    ClickOutside,
  },

  props: {
    align: {
      type: String,
      default: 'center',
      validator: (value) => validator.align.includes(value),
    },

    dismissible: {
      type: Boolean,
      default: false,
    },

    position: {
      default: 'bottom',
      type: String,
      validator: (value) => validator.position.includes(value),
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
