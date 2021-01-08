<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="inline-flex items-center justify-center rounded-full"
    :class="[
      {
        [`h-6 w-6 text-${props.size}`]: props.size === 'sm',
        'h-8 w-8': props.size === 'base',
        [`h-12 w-12 text-${props.size}`]: props.size === 'lg',
        [`h-20 w-20 text-${props.size}`]: props.size === 'xl',
        'bg-gray-200 text-green-100': props.status === 'disabled',
        'bg-red-500 text-red-100': ['danger', 'error'].includes(props.status),
        'bg-green-500 text-green-100': props.status === 'valid',
        'bg-orange-500 text-orange-100': props.status === 'warning',
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
      class="inline-block h-5 w-5"
    >
      <template v-if="props.status === 'valid'">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M16 10L10.5 15L8 12.7273" />
      </template>
    </svg>
  </Component>
</template>

<script>
export default {
  name: 'MijinAvatar',

  props: {
    number: {
      default: null,
      type: String,
    },

    size: {
      default: 'base',
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
