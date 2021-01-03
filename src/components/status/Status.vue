<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="inline-flex items-center justify-center rounded-full"
    :class="[
      {
        'h-3 w-3': props.size === 'sm',
        'h-5 w-5 p-1': props.size === 'base',
        'h-10 w-10 p-2': props.size === 'lg',
        'h-16 w-16 p-4': props.size === 'xl',
        'bg-gray-200 text-green-100': props.status === 'disabled',
        'bg-red-100 text-red-600': ['danger', 'error'].includes(props.status),
        'bg-green-100 text-green-600': props.status === 'valid',
        'bg-orange-100 text-orange-600': props.status === 'warning',
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
      v-if="props.variant === 'icon'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      shape-rendering="geometricPrecision"
      role="presentation"
      class="inline-block h-full w-full"
    >
      <template v-if="['danger', 'warning'].includes(props.status)">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </template>

      <template v-if="props.status === 'error'">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </template>

      <template v-if="props.status === 'valid'">
        <polyline points="20 6 9 17 4 12" />
      </template>
    </svg>
  </Component>
</template>

<script>
export default {
  name: 'MijiAvatar',

  props: {
    number: {
      default: null,
      type: String,
    },

    size: {
      default: 'lg',
      type: String,
      validator: (value) => [
        'sm',
        'base',
        'lg',
        'xl',
      ].includes(value),
    },

    status: {
      default: 'valid',
      type: String,
      validator: (value) => [
        'danger',
        'disabled',
        'error',
        'valid',
        'warning',
      ].includes(value),
    },

    tag: {
      default: 'span',
      type: String,
    },

    variant: {
      default: 'step',
      type: String,
      validator: (value) => [
        'step',
        'status',
        'icon',
      ].includes(value),
    },
  },
};
</script>
