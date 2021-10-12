<template>
  <label class="block">
    <p
      v-if="$slots.default"
      class="mb-1 text-gray-800 font-label dark:text-gray-200"
    >
      <slot />
    </p>

    <textarea
      class="h-full pl-2 appearance-none block w-full text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 border rounded-form leading-tight
        focus:outline-none transition-colors duration-150 ease-in-out"
      :class="[
        disabled ? 'bg-gray-200 dark:bg-gray-800 cursor-not-allowed' : 'bg-white dark:bg-gray-900',
        {
          // size
          'py-1': size === 'sm',
          'py-2': size === 'base',
          // status
          'border-gray-300 dark:border-gray-700': !status,
          'border-danger-500': status === 'error',
          'border-success-500': status === 'success',
          // focus
          'focus:border-primary-500 dark:focus:border-primary-500': !readonly,
        }
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
      class="text-sm text-danger-500 mt-1"
    >
      <slot name="error" />
    </p>

    <p
      v-if="$slots.success"
      class="text-sm text-success-500 mt-1"
    >
      <slot name="success" />
    </p>
  </label>
</template>

<script>
const validator = {
  size: [
    'sm',
    'base',
  ],
  status: [
    null,
    'error',
    'success',
  ],
};

export default {
  name: 'MijinTextarea',

  validator,

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
      validator: (value) => validator.size.includes(value),
    },

    status: {
      default: null,
      type: String,
      validator: (value) => validator.status.includes(value),
    },

    value: {
      type: [String, Number],
      default: null,
    },
  },

  computed: {
    listeners() {
      const vm = this;
      return {
        // Add listeners from parent
        ...this.$listeners,
        // Ensure that the component works with v-model
        blur: (event) => vm.$emit('blur', event),
        focus: (event) => vm.$emit('focus', event),
        input: (event) => vm.$emit('input', event.target.value),
      };
    },
  },
};
</script>
