<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    :class="[
      {
        [`border-${props.color}`]: props.color,
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
  />
</template>

<script>
export default {
  name: 'UiDivider',

  props: {
    color: {
      default: 'gray-200',
      type: String,
    },

    tag: {
      default: 'hr',
      type: String,
    },
  },
};
</script>
