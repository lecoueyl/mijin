<template>
  <div
    :class="[
      'fixed z-30 inset-0 overflow-y-auto transition-all',
      isOpen ? 'visible' : 'invisible ease-in duration-100'
    ]"
  >
    <div
      :class="[
        'fixed inset-0 bg-gray-500 dark:bg-gray-600 transition-opacity',
        isOpen ? 'ease-out duration-200 opacity-75' : 'ease-in duration-100 opacity-0',
      ]"
      @click.self="onOverlayClick()"
    />

    <div class="flex items-end sm:items-center justify-center min-h-full p-2 sm:p-6">
      <div
        :class="[
          'relative inline-block bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xl transform transition-all',
          {
            'w-full sm:max-w-lg': size === 'base',
            'w-full sm:max-w-3xl': size === 'lg',
            'w-full sm:max-w-5xl': size === 'xl',
            'w-full': size === 'full',
            'p-4 sm:p-6': padded,
          },
          isOpen ?
            'ease-out-mijin duration-500 opacity-100 translate-y-0 sm:scale-100'
            : 'ease-in-mijin duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
        ]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <button
          v-if="dismissButton"
          class="absolute top-4 right-4 h-6 w-6 p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300
                  transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-label="close"
          @click="close()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
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
    'xl',
    'full',
  ],
};

export default {
  name: 'MijinModal',

  validator,

  props: {
    dismissible: {
      type: Boolean,
      default: true,
    },

    dismissButton: {
      type: Boolean,
      default: false,
    },

    padded: {
      type: Boolean,
      default: true,
    },

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

    onOverlayClick() {
      if (!this.dismissible) return;
      this.close();
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
