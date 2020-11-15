<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="flex items-center justify-center overflow-hidden rounded-full"
    :class="[
      {
        [`h-6 w-6 text-${props.size}`]: props.size === 'sm',
        'h-8 w-8': props.size === 'base',
        [`h-12 w-12 text-${props.size}`]: props.size === 'lg',
        [`h-20 w-20 text-${props.size}`]: props.size === 'xl',
        [`bg-green-500 text-green-100`]: props.status === 'valid',
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
      v-if="props.variant === 'step'"
      class="leading-none"
    >{{ props.number }}</span>
  </Component>
</template>

<script>
export default {
  name: 'UiAvatar',

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

    size: {
      default: 'valid',
      type: String,
      validator: (value) => [
        'danger',
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
      ].includes(value),
    },
  },
};
</script>
