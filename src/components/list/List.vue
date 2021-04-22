<template>
  <component
    :is="tag"
    :class="{
      'flow-root': inline,
      'divide-x': inline && divided,
      'divide-y': !inline && divided,
      'list-decimal list-inside': tag === 'ol',
    }"
    class="divide-gray-300 dark:divide-gray-600"
  >
    <slot />
  </component>
</template>

<script>
const validator = {
  gutter: [
    'base',
    'lg',
    'xl',
  ],
};

export default {
  name: 'MijinList',

  validator,

  props: {
    divided: {
      default: false,
      type: Boolean,
    },

    gutter: {
      default: 'base',
      type: String,
      validator: (value) => validator.gutter.includes(value),
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
