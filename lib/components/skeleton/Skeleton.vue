<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="animate-pulse h-4"
    :class="[
      {
        [`bg-${props.color}`]: props.color,
      },
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
  />
</template>

<script>
export default {
  name: 'UiSkeleton',

  props: {
    color: {
      default: 'gray-300',
      type: String,
    },

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
