<template>
  <label
    class="inline-block focus:outline-none"
    :aria-checked="checked ? 'true' : 'false'"
    :aria-disabled="disabled ? 'true' : null"
    :tabindex="0"
  >
    <div
      class="flex"
      :class="{ 'cursor-not-allowed': disabled }"
    >
      <input
        :id="id"
        v-model="selected"
        type="checkbox"
        class="invisible absolute"
        :disabled="disabled"
        :name="name"
        :required="required"
        :value="value"
      >
      <div
        class="border rounded w-4 h-4 flex justify-center items-center flex-none mt-1"
        :class="[
          {
            'hover:border-primary-500 dark:hover:border-primary-500': !disabled,
            'bg-primary-500 border-primary-500': checked && !disabled,
            'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700': !checked && !disabled,
            // disabled
            'bg-gray-500 border-gray-600 dark:border-gray-400': checked && disabled,
            'bg-gray-200 border-gray-300 dark:border-gray-700': !checked && disabled,
          }
        ]"
      >
        <svg
          class="stroke-current w-3 h-3 text-primary-50"
          :class="{ 'opacity-0': !checked }"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span class="pl-2"><slot /></span>
    </div>
  </label>
</template>

<script>
export default {
  name: 'MijinCheckbox',

  model: {
    prop: 'options',
    event: 'change',
  },

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    id: {
      type: String,
      default: null,
    },

    options: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: null,
    },

    name: {
      type: String,
      default: null,
    },

    required: {
      type: Boolean,
      default: false,
    },

    value: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: null,
    },
  },

  computed: {
    checked() {
      if (Array.isArray(this.options)) {
        return this.options.includes(this.value);
      }

      return this.options;
    },

    selected: {
      get() {
        return this.options;
      },

      set(val) {
        this.$emit('change', val);
      },
    },
  },
};
</script>
