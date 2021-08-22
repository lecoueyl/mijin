<template>
  <component
    :is="tag"
    :class="[
      'flex',
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
  </component>
</template>

<script>
const validator = {
  align: [
    null,
    'baseline',
    'center',
    'end',
    'start',
    'stretch',
  ],
  gutter: [
    null,
    'base',
    'm',
    'lg',
  ],
};

export default {
  name: 'MijinRow',

  validator,

  props: {
    align: {
      type: String,
      default: null,
      validator: (value) => validator.align.includes(value),
    },

    gutter: {
      default: null,
      type: String,
      validator: (value) => validator.gutter.includes(value),
    },

    tag: {
      default: 'div',
      type: String,
    },
  },
};
</script>
