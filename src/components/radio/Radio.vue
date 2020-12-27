<template>
  <label
    class="inline-block cursor-pointer"
    :class="{
      'rounded border border-gray-300 dark:border-gray-700 p-2 hover:border-primary-500 focus:outline-none transition-colors duration-150 ease-in-out': bordered
    }"
    :aria-checked="checked ? 'true' : 'false'"
    :aria-disabled="disabled ? 'true' : null"
    :tabindex="0"
  >
    <div
      class="flex items-center"
      :class="{ 'cursor-not-allowed': disabled }"
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
        class="border rounded-full w-5 h-5 flex justify-center items-center flex-shrink-0"
        :class="[
          {
            'hover:border-primary-500': !disabled,
            'bg-primary-500 border-primary-500': checked && !disabled,
            'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700': !checked && !disabled,
            // disabled
            'bg-gray-500 border-gray-600 dark:border-gray-400': checked && disabled,
            'bg-gray-200 border-gray-300 dark:border-gray-700': !checked && disabled,
          }
        ]"
      >
        <svg
          class="fill-current w-3 h-3 text-primary-100"
          :class="{ 'opacity-0': !checked }"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      <div class="pl-2"><slot /></div>
    </div>

    <div
      v-if="$slots.summary"
      class="pl-6 ml-1"
    >
      <slot name="summary" />
    </div>
  </label>
</template>

<script>
export default {
  name: 'UiRadio',

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
