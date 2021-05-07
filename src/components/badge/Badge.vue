<template functional>
  <component
    :is="props.tag"
    :ref="data.ref"
    class="rounded-full inline-block leading-tight"
    :class="
      [
        {
          // fill
          'bg-blue-200 text-blue-900': props.variant === 'fill' && props.color === 'blue',
          'bg-cyan-200 text-cyan-900': props.variant === 'fill' && props.color === 'cyan',
          'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100': props.variant === 'fill' && props.color === 'gray',
          'bg-gray-200 text-gray-900': props.variant === 'fill' && props.color === 'gray',
          'bg-green-200 text-green-900': props.variant === 'fill' && props.color === 'green',
          'bg-indigo-200 text-indigo-900': props.variant === 'fill' && props.color === 'indigo',
          'bg-orange-200 text-orange-900': props.variant === 'fill' && props.color === 'orange',
          'bg-pink-200 text-pink-900': props.variant === 'fill' && props.color === 'pink',
          'bg-primary-200 text-primary-900': props.variant === 'fill' && props.color === 'primary',
          'bg-purple-200 text-purple-900': props.variant === 'fill' && props.color === 'purple',
          'bg-red-200 text-red-900': props.variant === 'fill' && props.color === 'red',
          'bg-teal-200 text-teal-900': props.variant === 'fill' && props.color === 'teal',
          'bg-yellow-200 text-yellow-900': props.variant === 'fill' && props.color === 'yellow',
          // outline
          'border': props.variant === 'outline',
          'text-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-500': props.variant === 'outline' && props.color === 'blue',
          'text-cyan-900 dark:text-cyan-200 border-cyan-300 dark:border-cyan-500': props.variant === 'outline' && props.color === 'cyan',
          'text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-500': props.variant === 'outline' && props.color === 'gray',
          'text-green-900 dark:text-green-200 border-green-300 dark:border-green-500': props.variant === 'outline' && props.color === 'green',
          'text-indigo-900 dark:text-indigo-200 border-indigo-300 dark:border-indigo-500': props.variant === 'outline' && props.color === 'indigo',
          'text-orange-900 dark:text-orange-200 border-orange-300 dark:border-orange-500': props.variant === 'outline' && props.color === 'orange',
          'text-pink-900 dark:text-pink-200 border-pink-300 dark:border-pink-500': props.variant === 'outline' && props.color === 'pink',
          'text-primary-900 dark:text-primary-200 border-primary-300 dark:border-primary-500': props.variant === 'outline' && props.color === 'primary',
          'text-purple-900 dark:text-purple-200 border-purple-300 dark:border-purple-500': props.variant === 'outline' && props.color === 'purple',
          'text-red-900 dark:text-red-200 border-red-300 dark:border-red-500': props.variant === 'outline' && props.color === 'red',
          'text-teal-900 dark:text-teal-200 border-teal-300 dark:border-teal-500': props.variant === 'outline' && props.color === 'teal',
          'text-yellow-900 dark:text-yellow-200 border-yellow-300 dark:border-yellow-500': props.variant === 'outline' && props.color === 'yellow',
          // size
          'text-sm px-2 py-px': props.size === 'sm',
          'px-3': props.size === 'base',
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
    <slot />
  </component>
</template>

<script>
const validator = {
  color: [
    'blue',
    'cyan',
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
  ],
  variant: [
    'outline',
    'fill',
  ],
};

export default {
  name: 'MijinBadge',

  validator,

  props: {
    color: {
      default: 'gray',
      type: String,
      validator: (value) => validator.size.includes(value),
    },

    size: {
      default: 'base',
      type: String,
      validator: (value) => validator.size.includes(value),
    },

    tag: {
      default: 'span',
      type: String,
    },

    variant: {
      default: 'fill',
      type: String,
      validator: (value) => validator.variant.includes(value),
    },
  },
};
</script>
