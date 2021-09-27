<template>
  <label
    ref="label"
    :class="[
      'focus:outline-none group',
      $slots.default ? 'inline-flex' : 'inline-block',
      disabled ? 'border-gray-300 dark:border-gray-700 cursor-not-allowed' : 'cursor-pointer',
      {
        'rounded border p-2 transition-colors duration-150 ease-in-out': bordered,
        'border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500': bordered && !checked && !disabled,
        'border-primary-500 dark:border-primary-500': bordered && checked,
      }
    ]"
    :aria-checked="checked ? 'true' : 'false'"
    :aria-disabled="disabled ? 'true' : null"
    :tabindex="0"
    @keydown.prevent.enter="$refs.label.click()"
  >
    <input
      :id="id"
      v-model="selected"
      type="radio"
      class="invisible absolute"
      :disabled="disabled"
      :name="name"
      :required="required"
      :value="value"
    >
    <div
      :class="[
        'border rounded-full w-4 h-4 flex justify-center items-center flex-none transition-colors',
        {
          'my-1': $slots.default,
          'group-hover:border-primary-500': !disabled,
          'bg-primary-500 border-primary-500': checked && !disabled,
          'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700': !checked && !disabled,
          // disabled
          'bg-gray-500 border-gray-600 dark:border-gray-400': checked && disabled,
          'bg-gray-200 border-gray-300 dark:bg-gray-600 dark:border-gray-700': !checked && disabled,
        }
      ]"
    >
      <div
        :class="[
          'bg-primary-50 rounded w-1.5 h-1.5',
          { 'invisible': !checked },
        ]"
      />
    </div>
    <div
      v-if="$slots.default"
      class="pl-2"
    >
      <slot />
      <div
        v-if="$slots.summary"
      >
        <slot name="summary" />
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: 'MijinRadio',

  model: {
    prop: 'options',
    event: 'change',
  },

  props: {
    bordered: {
      type: Boolean,
      default: false,
    },

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
      return this.options === this.value;
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
