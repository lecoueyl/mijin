<template>
  <div
    class="fixed z-30 inset-0 overflow-y-auto transition-all"
    :class="[
      isOpen ? 'visible' : 'invisible ease-in duration-100'
    ]"
  >
    <div
      class="fixed inset-0 bg-gray-500 dark:bg-gray-600 transition-opacity"
      :class="[
        isOpen ? 'ease-out duration-200 opacity-75' : 'ease-in duration-100 opacity-0',
      ]"
      @click.self="close()"
    />

    <div
      class="flex items-end sm:items-center justify-center min-h-screen p-4"
    >
      <div
        class="inline-block bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xl transform transition-all p-4 sm:p-6"
        :class="[
          {
            'sm:max-w-lg': size === 'base',
            'sm:max-w-3xl': size === 'lg',
            'w-full': size === 'full',
          },
          isOpen ?
            'ease-out duration-200 opacity-100 translate-y-0 sm:scale-100'
            : 'ease-in duration-100 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
        ]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
const validator = {
  size: [
    'base',
    'lg',
    'full',
  ],
};

export default {
  name: 'MijinModal',

  validator,

  props: {
    size: {
      type: String,
      default: 'base',
      validator: (value) => validator.size.includes(value),
    },
  },

  data() {
    return {
      isOpen: false,
    };
  },

  beforeMount() {
    document.addEventListener('keydown', this.onKeydown);
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeydown);
  },

  methods: {
    close() {
      this.isOpen = false;
      this.$emit('close');
    },

    onKeydown(event) {
      if (event.keyCode === 27 && this.isOpen) {
        this.close();
      }
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
