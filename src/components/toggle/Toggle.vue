<template>
  <label
    :class="[
      !disabled ? 'cursor-pointer' : 'cursor-not-allowed',
      $slots.default ? 'inline-flex' : 'inline-block',
      {
        'items-center': centered,
        'flex-row-reverse': reversed,
      },
    ]"
  >
    <div
      class="flex-none rounded-full transition-colors duration-300"
      :class="[
        {
          'w-6 h-3 my-1.5': size === 'sm',
          'w-10 h-6 p-1': size === 'base',
          'bg-gray-300 dark:bg-gray-600': disabled && !checked,
          'bg-gray-400 dark:bg-gray-400': disabled && checked,
          'bg-gray-200 dark:bg-gray-600': !disabled && !checked,
          'bg-primary-200': !disabled && checked,
        }
      ]"
    >
      <input
        :id="id"
        v-model="checked"
        :aria-checked="checked ? 'true' : 'false'"
        :aria-disabled="disabled ? 'true' : null"
        :disabled="disabled"
        :name="name"
        :required="required"
        type="checkbox"
        class="hidden"
      >

      <div
        class="rounded-full shadow transform transition duration-300"
        :class="[
          {
            'w-3 h-3': size === 'sm',
            'w-4 h-4': size === 'base',
            'translate-x-full': checked,
            'bg-gray-200 dark:bg-gray-200': disabled,
            'bg-white': !disabled && !checked,
            'bg-primary-500': !disabled && checked,
          },
        ]"
      />
    </div>
    <span
      v-if="$slots.default"
      :class="reversed ? 'pr-2' : 'pl-2'"
    >
      <slot />
    </span>
  </label>
</template>

<script>
const validator = {
  size: [
    'sm',
    'base',
  ],
};

export default {
  name: 'MijinToggle',

  validator,

  model: {
    prop: 'option',
    event: 'change',
  },

  props: {
    centered: {
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

    option: {
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

    reversed: {
      type: Boolean,
      default: false,
    },

    size: {
      default: 'base',
      type: String,
      validator: (value) => validator.size.includes(value),
    },
  },

  computed: {
    checked: {
      get() {
        return this.option;
      },
      set(val) {
        this.$emit('change', val);
      },
    },
  },
};
</script>
