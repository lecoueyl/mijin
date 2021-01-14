<template>
  <label class="block">
    <p
      v-if="$slots.label"
      class="text-gray-800 dark:text-gray-200 mb-1"
    >
      <slot name="label" />
    </p>

    <div class="relative">
      <select
        class="block appearance-none w-full border border-gray-300 dark:border-gray-700 pr-8 rounded-form leading-tight
          focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 transition-colors duration-150 ease-in-out"
        :class="[
          disabled
            ? 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 cursor-not-allowed'
            : 'bg-white dark:bg-gray-900',
          size === 'sm' ? 'text-sm py-1 pl-2' : 'py-2 pl-2',
          {
            'text-gray-400 dark:text-gray-600': value === '' || value === null,
          },
        ]"
        :disabled="disabled"
        :name="name"
        :readonly="readonly"
        :value="value"
        v-bind="$attrs"
        v-on="listeners"
      >
        <option
          v-if="placeholder"
          disabled
          value=""
        >
          {{ placeholder }}
        </option>
        <slot />
      </select>

      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <svg
          class="h-4 w-4 stroke-2"
          :class="[disabled ? 'text-gray-600 dark:text-gray-400': 'text-gray-700 dark:text-gray-300']"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-linecap="round"
          fill="none"
        >
          <path d="M18 8L12 2L6 8" />
          <path d="M18 16L12 22L6 16" />
        </svg>
      </div>
    </div>

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
  name: 'MijinSelect',

  props: {
    disabled: {
      default: false,
      type: Boolean,
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
      const vm = this;
      return {
        // Add listeners from parent
        ...this.$listeners,
        // Ensure that the component works with v-model
        blur: (event) => vm.$emit('blur', event),
        focus: (event) => vm.$emit('focus', event),
        input(event) {
          vm.$emit('input', event.target.value);
          vm.$emit('select', event.target.value);
        },
      };
    },
  },
};
</script>
