<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="flex shadow-border-b"
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
  name: 'UiTabs',

  props: {
    tag: {
      default: 'ul',
      type: String,
    },
  },
};
</script>
