<template>
  <Component
    :is="tag"
    :class="{
      'divide-x flow-root': inline,
      'divide-y divide-y-4': !inline,
      'list-decimal list-inside': tag === 'ol',
    }"
    class="divide-gray-300 dark:divide-gray-600"
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
