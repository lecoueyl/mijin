<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    :class="[
      isOpen ? 'visible' : 'invisible opacity-0'
    ]"
  >
    <div
      class="fixed inset-0 bg-gray-500 opacity-75"
      @click.self="close()"
    />
    <div class="flex items-end sm:items-center justify-center min-h-screen p-4">
      <div
        class="inline-block bg-background rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg p-4 sm:p-6"
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
