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
    class="border-gray-200 dark:border-gray-800"
    v-bind="data.attrs"
    v-on="listeners"
  />
</template>

<script>
export default {
  name: 'MijinDivider',

  props: {
    tag: {
      default: 'hr',
      type: String,
    },
  },
};
</script>
