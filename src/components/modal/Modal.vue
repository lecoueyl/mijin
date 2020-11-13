<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto transition-all"
    :class="[
      isOpen ? 'visible' : 'invisible ease-in duration-100'
    ]"
  >
    <div
      class="fixed inset-0 bg-gray-500 transition-opacity"
      :class="[
        isOpen ? 'ease-out duration-200 opacity-75' : 'ease-in duration-100 opacity-0',
      ]"
      @click.self="close()"
    />

    <div
      class="flex items-end sm:items-center justify-center min-h-screen p-4"
    >
      <div
        class="inline-block bg-background rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg p-4 sm:p-6"
        :class="[
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
export default {
  name: 'UiModal',

  props: {
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
      isOpen: true,
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
