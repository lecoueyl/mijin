<template>
  <Component
    :is="tag"
    class="flex flex-wrap"
    :class="[
      {
        // align
        'items-baseline': align && align === 'baseline',
        'items-center': align && align === 'center',
        'items-end': align && align === 'end',
        'items-start': align && align === 'start',
        'items-stretch': align && align === 'stretch',
        // gutter
        '-mx-2': gutter && gutter === 'base',
        '-mx-4': gutter && gutter === 'm',
        '-mx-8': gutter && gutter === 'lg',
      },
    ]"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  name: 'MijinRow',

  props: {
    align: {
      type: String,
      default: null,
      validator: (value) => [
        null,
        'baseline',
        'center',
        'end',
        'start',
        'stretch',
      ].includes(value),
    },

    gutter: {
      default: null,
      type: String,
      validator: (value) => [
        null,
        'base',
        'm',
        'lg',
      ].includes(value),
    },

    tag: {
      default: 'div',
      type: String,
    },
  },
};
</script>
