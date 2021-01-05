<template>
  <label class="block">
    <p
      v-if="$slots.default"
      class="text-gray-800 dark:text-gray-200 mb-1"
    >
      <slot />
    </p>

    <textarea
      class="appearance-none block w-full text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 border border-gray-300 dark:border-gray-700
        rounded-md leading-tight
        focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 transition-colors duration-150 ease-in-out"
      :class="[
        $slots.icon ? 'pl-8' : 'pl-2',
        disabled ? 'bg-gray-200 dark:bg-gray-800 cursor-not-allowed' : 'bg-white dark:bg-gray-900',
        size === 'sm' ? 'text-sm py-1' : 'py-2',
      ]"
      :disabled="disabled"
      :maxlength="maxlength"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="value"
      v-bind="$attrs"
      v-on="listeners"
    />

    <p
      v-if="$slots.error"
      class="text-sm text-red-500 mt-1"
    >
      <slot name="error" />
    </p>
  </label>
</template>

<script>
export default {
  name: 'MijiTextarea',

  props: {
    disabled: {
      default: false,
      type: Boolean,
    },

    maxlength: {
      type: Number,
      default: null,
    },

    name: {
      type: String,
      default: null,
    },

    placeholder: {
      type: String,
      default: null,
    },

    readonly: {
      type: Boolean,
      default: null,
    },

    size: {
      default: 'base',
      type: String,
      validator: (value) => [
        'sm',
        'base',
      ].includes(value),
    },

    value: {
      type: [String, Number],
      default: null,
    },
  },

  computed: {
    listeners() {
      return {
        // Add listeners from parent
        ...this.$listeners,
        // Ensure that the component works with v-model
        input(event) {
          this.$emit('input', event.target.value);
        },
        focus: () => this.$emit('focus'),
        blur: () => this.$emit('blur'),
      };
    },
  },
};
</script>
