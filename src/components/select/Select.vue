<template>
  <label class="block">
    <p
      v-if="$slots.default"
      class="text-gray-800 mb-1"
    >
      <slot />
    </p>

    <textarea
      class="appearance-none block w-full text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md leading-tight
        focus:outline-none focus:border-primary-500"
      :class="[
        $slots.icon ? 'pl-8' : 'pl-2',
        disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-background',
        size === 'sm' ? 'text-sm py-1' : 'py-2',
        type === 'password' ? 'pr-8' : 'pr-2',
      ]"
      :disabled="disabled"
      :name="name"
      :readonly="readonly"
      :type="type"
      :value="value"
      v-bind="$attrs"
      v-on="listeners"
    >
      {{ placeholder }}
    </textarea>

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
};
</script>
