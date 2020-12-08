<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    :class="[
      data.class,
      data.staticClass,
    ]"
    :style="[
      data.style,
      data.staticStyle,
    ]"
    class="border-gray-200"
    v-bind="data.attrs"
    v-on="listeners"
  />
</template>

<script>
export default {
  name: 'UiDivider',

  props: {
    tag: {
      default: 'hr',
      type: String,
    },
  },
};
</script>
