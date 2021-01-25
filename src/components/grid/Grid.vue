<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="grid"
    :class="[
      {
        [`grid-cols-1 sm:grid-cols-${props.cols}`]: props.cols,
        [`gap-1 sm:gap-${props.gap}`]: props.gap,
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
  name: 'MijinGrid',

  props: {
    cols: {
      default: null,
      type: String,
    },
    gap: {
      default: null,
      type: String,
    },
    tag: {
      default: 'div',
      type: String,
    },
  },
};
</script>
