<template functional>
  <component
    :is="props.tag"
    :ref="data.ref"
    class="rounded-full inline-block leading-tight"
    :class="
      [
        {
          // fill
          'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100': props.variant === 'fill' && props.color === 'gray',
          'bg-primary-200 text-primary-900': props.variant === 'fill' && props.color === 'primary',
          'bg-blue-200 text-blue-900': props.variant === 'fill' && props.color === 'blue',
          // outline
          'border': props.variant === 'outline',
          'text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-500': props.variant === 'outline' && props.color === 'gray',
          'text-primary-900 dark:text-primary-200 border-primary-300 dark:border-primary-500': props.variant === 'outline' && props.color === 'primary',
          'text-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-500': props.variant === 'outline' && props.color === 'blue',
          // size
          'text-sm px-2 py-px': props.size === 'sm',
          'px-2': props.size === 'base',
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
