<template>
  <label
    :class="[
      !disabled ? 'cursor-pointer' : 'cursor-not-allowed',
      $slots.default ? 'flex items-center' : 'inline-block',
    ]"
  >
    <div
      class="rounded-full transition-colors duration-300"
      :class="[
        {
          'w-6': size === 'sm',
          'w-10 p-1': size === 'base',
          'bg-gray-300': disabled,
          'bg-gray-400': disabled && checked,
          'bg-gray-200': !disabled && !checked,
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
            'bg-gray-200': disabled,
            'bg-white': !disabled && !checked,
            'bg-primary-500': !disabled && checked,
          },
        ]"
      />
    </div>
    <span
      v-if="$slots.default"
      class="pl-2"
    >
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: 'UiToggle',

  model: {
    prop: 'option',
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

    size: {
      default: 'base',
      type: String,
      validator: (value) => [
        'sm',
        'base',
      ].includes(value),
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
