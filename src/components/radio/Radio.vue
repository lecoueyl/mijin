<template>
  <label
    ref="label"
    :class="[
      'inline-block cursor-pointer focus:outline-none group',
      {
        'rounded border border-gray-300 dark:border-gray-700 p-2 hover:border-primary-500 dark:hover:border-primary-500': bordered,
        'transition-colors duration-150 ease-in-out': bordered,
        'border-primary-500 dark:border-primary-500': checked && !disabled,
      }
    ]"
    :aria-checked="checked ? 'true' : 'false'"
    :aria-disabled="disabled ? 'true' : null"
    :tabindex="0"
    @keydown.prevent.enter="$refs.label.click()"
  >
    <div
      :class="[
        'flex',
        { 'cursor-not-allowed': disabled },
      ]"
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
          'border rounded-full w-4 h-4 my-1 flex justify-center items-center flex-none transition-colors',
          {
            'group-hover:border-primary-500': !disabled,
            'bg-primary-500 border-primary-500': checked && !disabled,
            'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700': !checked && !disabled,
            // disabled
            'bg-gray-500 border-gray-600 dark:border-gray-400': checked && disabled,
            'bg-gray-200 border-gray-300 dark:border-gray-700': !checked && disabled,
          }
        ]"
      >
        <div
          :class="[
            'bg-primary-50 rounded w-1.5 h-1.5',
            { 'opacity-0': !checked },
          ]"
        />
      </div>
      <div class="pl-2"><slot /></div>
    </div>

    <div
      v-if="$slots.summary"
      class="pl-4 ml-2"
    >
      <slot name="summary" />
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
