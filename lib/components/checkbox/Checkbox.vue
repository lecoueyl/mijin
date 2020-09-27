<template>
  <label
    role="checkbox"
    class="inline-block"
    :aria-checked="checked"
    :aria-disabled="disabled ? 'true' : null"
  >
    <div class="flex items-center">
      <input
        ref="input"
        type="checkbox"
        class="invisible absolute"
        @change="onChange"
      >
      <div
        class="border-2 rounded w-5 h-5 flex justify-center items-center hover:border-primary-500"
        :class="[checked ? 'bg-primary-500 border-primary-500': 'bg-background border-gray-600']"
      >
        <svg
          class="fill-current w-3 h-3 text-white-500"
          :class="{ 'opacity-0': !checked }"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      <span class="pl-2"><slot /></span>
    </div>
  </label>
</template>

<script>
export default {
  name: 'UiCheckbox',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      checked: this.value,
    };
  },

  methods: {
    onChange(event) {
      this.checked = event.target.checked;
      this.$emit('input', event.target.checked);
    },
  },
};
</script>
