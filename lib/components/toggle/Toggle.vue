<template>
  <label
    :class="[
      !disabled ? 'cursor-pointer' : 'cursor-not-allowed',
      $slots.default ? 'flex items-center' : 'inline-block',
    ]"
  >
    <div
      class=" rounded-full p-1 w-10 transition-colors duration-300"
      :class="[
        checked ? 'bg-primary-200' : 'bg-gray-200'
      ]"
    >
      <input
        :id="id"
        v-model="selected"
        :aria-checked="checked ? 'true' : 'false'"
        :aria-disabled="disabled ? 'true' : null"
        :disabled="disabled"
        :name="name"
        :required="required"
        :value="value"
        type="checkbox"
        class="hidden"
      >

      <div
        class="w-4 h-4 rounded-full shadow transform transition duration-300"
        :class="[
          {
            'translate-x-full': checked,
          },
          checked ? 'bg-primary-500' : 'bg-background'
        ]"
      />
    </div>
    <span class="pl-2"><slot /></span>
  </label>
</template>

<script>
export default {
  name: 'UiToggle',

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
