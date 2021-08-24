<template>
  <label
    ref="label"
    class=""
    :class="[
      'focus:outline-none group',
      $slots.default ? 'inline-flex' : 'inline-block',
      disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    ]"
    :aria-checked="checked ? 'true' : 'false'"
    :aria-disabled="disabled ? 'true' : null"
    :tabindex="0"
    @keydown.prevent.enter="$refs.label.click()"
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
      :class="[
        'border rounded flex justify-center items-center flex-none w-4 h-4 transition-colors',
        {
          'my-1': $slots.default,
          'group-hover:border-primary-500 dark:group-hover:border-primary-500': !disabled,
          'bg-primary-500 border-primary-500': (checked || mixed) && !disabled,
          'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700': (!checked && !mixed )&& !disabled,
          // disabled
          'bg-gray-500 border-gray-600 dark:border-gray-400': (checked || mixed) && disabled,
          'bg-gray-200 border-gray-300 dark:border-gray-700': (!checked && !mixed) && disabled,
        }
      ]"
    >
      <svg
        :class="[
          'w-3 h-3 text-primary-50',
          { 'invisible': !checked && !mixed }
        ]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line
          v-if="mixed"
          x1="5"
          y1="12"
          x2="19"
          y2="12"
        />
        <polyline
          v-else
          points="20 6 9 17 4 12"
        />
      </svg>
    </div>
    <div
      v-if="$slots.default"
      class="pl-2"
    >
      <slot />
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

    mixed: {
      type: Boolean,
      default: false,
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
