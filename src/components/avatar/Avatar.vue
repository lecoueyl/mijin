<template functional>
  <component
    :is="props.tag"
    :ref="data.ref"
    class="inline-flex items-center justify-center overflow-hidden"
    :class="[
      {
        // color
        'bg-blue-500 text-blue-50': props.color === 'blue',
        'bg-gray-500 text-gray-50': props.color === 'gray',
        'bg-green-500 text-green-50': props.color === 'green',
        'bg-indigo-500 text-indigo-50': props.color === 'indigo',
        'bg-orange-500 text-orange-50': props.color === 'orange',
        'bg-pink-500 text-pink-50': props.color === 'pink',
        'bg-primary-500 text-primary-50': props.color === 'primary',
        'bg-purple-500 text-purple-50': props.color === 'purple',
        'bg-red-500 text-red-50': props.color === 'red',
        'bg-teal-500 text-teal-50': props.color === 'teal',
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
      v-if="props.src"
      :alt="props.alt"
      :src="props.src"
      class="h-full w-full"
    >
    <slot />
  </component>
</template>

<script>
const validator = {
  color: [
    'blue',
    'gray',
    'green',
    'indigo',
    'orange',
    'pink',
    'primary',
    'purple',
    'red',
    'teal',
    'yellow',
  ],
  size: [
    'sm',
    'base',
    'lg',
    'xl',
  ],
  variant: [
    'rounded',
    'squared',
  ],
};

export default {
  name: 'MijinAvatar',

  validator,

  props: {
    alt: {
      default: null,
      type: String,
    },

    color: {
      default: 'primary',
      type: String,
      validator: (value) => validator.color.includes(value),
    },

    letter: {
      default: null,
      type: String,
    },

    size: {
      default: 'base',
      type: String,
      validator: (value) => validator.size.includes(value),
    },

    src: {
      default: null,
      type: String,
    },

    tag: {
      default: 'span',
      type: String,
    },

    variant: {
      default: 'rounded',
      type: String,
      validator: (value) => validator.variant.includes(value),
    },
  },
};
</script>
