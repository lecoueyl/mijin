<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="inline-flex items-center justify-center overflow-hidden"
    :class="[
      {
        // color
        'bg-blue-500 text-blue-50': props.color === 'blue',
        'bg-green-500 text-green-50': props.color === 'green',
        'bg-primary-500 text-primary-50': props.color === 'primary',
        'bg-red-500 text-red-50': props.color === 'red',
        'bg-yellow-500 text-yellow-50': props.color === 'yellow',
        // size
        'h-6 w-6 text-sm': props.size === 'sm',
        'h-8 w-8': props.size === 'base',
        'h-12 w-12 text-lg': props.size === 'lg',
        'h-20 w-20 text-xl': props.size === 'xl',
        // variant
        'rounded-full': props.variant === 'rounded',
        'rounded-md': props.variant === 'squared',
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
      v-if="props.letter"
      class="leading-none"
    >{{ props.letter }}</span>

    <img
      v-if="props.img"
      :alt="props.alt"
      :src="props.img"
      class="h-full w-full"
    >
  </Component>
</template>

<script>
export default {
  name: 'UiAvatar',

  props: {
    alt: {
      default: null,
      type: String,
    },

    color: {
      default: 'primary',
      type: String,
      validator: (value) => [
        'blue',
        'green',
        'primary',
        'red',
        'yellow',
      ].includes(value),
    },

    img: {
      default: null,
      type: String,
    },

    letter: {
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

    tag: {
      default: 'span',
      type: String,
    },

    variant: {
      default: 'rounded',
      type: String,
      validator: (value) => [
        'rounded',
        'squared',
      ].includes(value),
    },
  },
};
</script>
