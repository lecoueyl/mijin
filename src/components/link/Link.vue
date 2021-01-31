<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="transition-colors duration-150 ease-in-out"
    :class="[
      {
        // color
        'hover:text-gray-600 dark:hover:text-gray-300': props.color === 'gray',
        'text-primary-500 hover:text-primary-700': props.color === 'primary',
        'text-danger-500 hover:text-danger-700': props.color === 'danger',
        'text-warning-500 hover:text-warning-700': props.color === 'warning',
        'text-success-500 hover:text-success-700': props.color === 'success',
        // underline
        'underline': props.underline,
      },
      data.class,
      data.staticClass,
    ]"
    :style="[
      data.style,
      data.staticStyle,
    ]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <span
      v-if="props.external"
      class="inline-flex items-center"
    >
      <slot />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="none"
        role="presentation"
        class="stroke-2 w-4 h-4 ml"
      >
        <line
          x1="7"
          y1="17"
          x2="17"
          y2="7"
        />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </span>
    <template v-else>
      <slot />
    </template>
  </Component>
</template>

<script>
const validator = {
  color: [
    'danger',
    'gray',
    'primary',
    'success',
    'warning',
  ],
};

export default {
  name: 'MijinLink',

  validator,

  props: {
    color: {
      default: 'primary',
      type: String,
      validator: (value) => validator.color.includes(value),
    },

    external: {
      default: false,
      type: Boolean,
    },

    tag: {
      default: 'a',
      type: String,
    },

    underline: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
