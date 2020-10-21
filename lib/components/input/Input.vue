<template>
  <label class="block">
    <p
      v-if="$slots.default"
      class="text-gray-800 mb-1"
    >
      <slot />
    </p>

    <div class="relative">
      <span
        v-if="$slots.icon"
        class="w-5 h-5 text-gray-500 absolute my-auto ml-2 inset-y-0 left-0"
        :class="[{
          'mr-1': $slots.default && !props.iconRight,
          'ml-1': $slots.default && props.iconRight,
        }]"
      >
        <slot name="icon" />
      </span>

      <input
        ref="input"
        class="appearance-none block w-full text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md leading-tight
          focus:outline-none focus:border-primary-500"
        :class="[
          $slots.icon ? 'pl-8' : 'pl-2',
          disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-background',
          size === 'sm' ? 'text-sm py-1' : 'py-2',
          type === 'password' ? 'pr-8' : 'pr-2',
        ]"
        :disabled="disabled"
        :max="max"
        :maxlength="maxlength"
        :min="min"
        :minlength="minlength"
        :name="name"
        :placeholder="placeholder"
        :readonly="readonly"
        :type="type"
        :value="value"
        v-bind="$attrs"
        v-on="listeners"
      >

      <svg
        v-if="type === 'password'"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="none"
        role="presentation"
        class="text-gray-700 stroke-2 w-5 absolute my-auto mr-2 inset-y-0 right-0 cursor-pointer"
        @click="togglePasswordVisibility()"
      >
        <template v-if="currentType === 'password'">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </template>

        <template v-else>
          <!-- eslint-disable-next-line max-len -->
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </template>
      </svg>
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
  name: 'UiInput',

  props: {
    disabled: {
      default: false,
      type: Boolean,
    },

    group: {
      default: false,
      type: [String, Boolean],
      validator: (value) => [
        false,
        true,
        '',
        'first',
        'last',
      ].includes(value),
    },

    icon: {
      default: null,
      type: String,
    },

    max: {
      type: Number,
      default: null,
    },

    maxlength: {
      type: Number,
      default: null,
    },

    min: {
      type: Number,
      default: null,
    },

    minlength: {
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
      validator: (value) => [
        'sm',
        'base',
      ].includes(value),
    },

    type: {
      type: String,
      default: 'text',
    },

    value: {
      type: [String, Number],
      default: null,
    },
  },

  data() {
    return {
      currentType: this.type,
    };
  },

  computed: {
    listeners() {
      const vm = this;
      return {
        // Add listeners from parent
        ...this.$listeners,
        // Ensure that the component works with v-model
        input(event) {
          vm.$emit('input', event.target.value);
        },
        focus: () => vm.$emit('focus'),
        blur: () => vm.$emit('blur'),
      };
    },
  },

  methods: {
    togglePasswordVisibility() {
      this.currentType = this.currentType === 'password' ? 'text' : 'password';
      this.$refs.input.setAttribute('type', this.currentType);
    },
  },
};
</script>
