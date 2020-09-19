<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded transition-colors duration-100 cursor-pointer
      focus:outline-none focus:bg-primary-600"
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
  name: 'UiButton',
  props: {
    size: {
      default: null,
      type: Number,
    },
    tag: {
      default: 'button',
      type: String,
    },
  },
};
</script>
