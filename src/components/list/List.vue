<template>
  <Component
    :is="tag"
    :class="{
      'clearfix': inline,
      'list-decimal list-inside': tag === 'ol',
    }"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  name: 'UiList',

  props: {
    bordered: {
      default: false,
      type: Boolean,
    },

    gutter: {
      default: 'base',
      type: String,
      validator: (value) => [
        'base',
        'lg',
      ].includes(value),
    },

    inline: {
      default: false,
      type: Boolean,
    },

    tag: {
      default: 'ul',
      type: String,
    },
  },
};
</script>
