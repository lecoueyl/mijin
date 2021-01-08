<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="rounded-full inline-block leading-tight"
    :class="
      [
        {
          // fill
          'bg-gray-300 text-gray-900': props.variant === 'fill' && props.color === 'gray',
          'bg-primary-200 text-primary-900': props.variant === 'fill' && props.color === 'primary',
          'bg-green-200 text-green-900': props.variant === 'fill' && props.color === 'green',
          // outline
          'text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700': props.variant === 'outline' && props.color === 'gray',
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
  </Component>
</template>

<script>
export default {
  name: 'MijinBadge',

  props: {
    color: {
      default: 'gray',
      type: String,
    },

    size: {
      default: 'base',
      type: String,
      validator: (value) => [
        'sm',
        'base',
      ].includes(value),
    },

    tag: {
      default: 'span',
      type: String,
    },

    variant: {
      default: 'fill',
      type: String,
      validator: (value) => [
        'outline',
        'fill',
      ].includes(value),
    },
  },
};
</script>
