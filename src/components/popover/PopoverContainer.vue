<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="bg-background shadow-lg rounded-md border border-gray-200"
    :class="[
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
  name: 'UiPopoverContainer',

  props: {
    tag: {
      default: 'div',
      type: String,
    },
  },
};
</script>
