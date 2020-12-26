<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="animate-pulse bg-gray-300 dark:bg-gray-600"
    :class="[
      props.rounded ? 'rounded-full' : 'rounded-sm',
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
    &#8203;
  </Component>
</template>

<script>
export default {
  name: 'UiSkeleton',

  props: {
    rounded: {
      default: false,
      type: Boolean,
    },

    tag: {
      default: 'div',
      type: String,
    },
  },
};
</script>
