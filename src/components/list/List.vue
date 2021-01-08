<template>
  <Component
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
  </Component>
</template>

<script>
export default {
  name: 'MijinList',

  props: {
    divided: {
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
