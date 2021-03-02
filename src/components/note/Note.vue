<template functional>
  <component
    :is="props.tag"
    :ref="data.ref"
    class="flex rounded-md p-2"
    :class="[
      {
        'border': !props.filled,
        'text-blue-500 border-blue-500': !props.filled && props.variant === 'info',
        'text-success-500 border-success-500': !props.filled && props.variant === 'success',
        'text-danger-500 border-danger-500': !props.filled && props.variant === 'danger',
        'text-warning-500 border-warning-500': !props.filled && props.variant === 'warning',
        // filled
        'bg-blue-500 text-blue-50': props.filled && props.variant === 'info',
        'bg-success-500 text-success-50': props.filled && props.variant === 'success',
        'bg-danger-500 text-danger-50': props.filled && props.variant === 'danger',
        'bg-warning-500 text-warning-50': props.filled && props.variant === 'warning',
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
    <svg
      v-if="!$slots.icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-linecap="round"
      fill="none"
      role="presentation"
      class="flex-none stroke-2 w-4 h-4 mt-1 mr-2"
    >
      <template v-if="props.variant === 'info'">
        <circle
          cx="12"
          cy="12"
          r="10"
        />
        <line
          x1="12"
          y1="8"
          x2="12"
          y2="12"
        />
        <line
          x1="12"
          y1="16"
          x2="12"
          y2="16"
        />
      </template>

      <template v-if="props.variant === 'success'">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M16 10L10.5 15L8 12.7273" />
      </template>

      <template v-if="props.variant === 'danger'">
        <path d="M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2Z" />
        <path d="M9 9L15 15" />
        <path d="M15 9L9 15" />
      </template>

      <template v-if="props.variant === 'warning'">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line
          x1="12"
          y1="9"
          x2="12"
          y2="13"
        />
        <line
          x1="12"
          y1="17"
          x2="12"
          y2="17"
        />
      </template>
    </svg>

    <div
      v-if="$slots.icon"
      class="flex-none pr-2"
    >
      <slot name="icon" />
    </div>

    <slot />
  </component>
</template>

<script>
const validator = {
  variant: [
    'info',
    'danger',
    'success',
    'warning',
  ],
};

export default {
  name: 'MijinNote',

  validator,

  props: {
    filled: {
      default: false,
      type: Boolean,
    },

    tag: {
      default: 'div',
      type: String,
    },

    variant: {
      default: 'info',
      type: String,
      validator: (value) => validator.variant.includes(value),
    },
  },
};
</script>
