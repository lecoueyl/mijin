<template functional>
  <component
    :is="props.tag"
    :ref="data.ref"
    class="inline-flex items-center justify-center rounded-full"
    :class="[
      {
        // size
        'h-6 w-6 p-1': props.size === 'base',
        'h-10 w-10 p-2': props.size === 'lg',
        'h-16 w-16 p-4': props.size === 'xl',

        // status
        'bg-danger-100 text-danger-600': ['danger', 'error'].includes(props.status),
        'bg-success-100 text-success-600': props.status === 'success',
        'bg-warning-100 text-warning-600': props.status === 'warning',
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
        <line
          x1="12"
          y1="9"
          x2="12"
          y2="13"
        />
        <line
          x1="12"
          y1="17"
          x2="12.01"
          y2="17"
        />
      </template>

      <template v-if="props.status === 'error'">
        <line
          x1="18"
          y1="6"
          x2="6"
          y2="18"
        />
        <line
          x1="6"
          y1="6"
          x2="18"
          y2="18"
        />
      </template>

      <template v-if="props.status === 'success'">
        <polyline points="20 6 9 17 4 12" />
      </template>
    </svg>
  </component>
</template>

<script>
const validator = {
  size: [
    'base',
    'lg',
    'xl',
  ],
  status: [
    'danger',
    'error',
    'success',
    'warning',
  ],
};

export default {
  name: 'MijinStatusIcon',

  validator,

  props: {
    size: {
      default: 'base',
      type: String,
      validator: (value) => validator.size.includes(value),
    },

    status: {
      default: 'success',
      type: String,
      validator: (value) => validator.status.includes(value),
    },

    tag: {
      default: 'span',
      type: String,
    },
  },
};
</script>
