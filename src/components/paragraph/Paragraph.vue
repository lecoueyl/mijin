<template functional>
  <component
    :is="props.tag"
    :ref="data.ref"
    class="text-gray-700 dark:text-gray-300"
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
  </component>
</template>

<script>
export default {
  name: 'MijinParagraph',

  props: {
    tag: {
      default: 'p',
      type: String,
    },
  },
};
</script>
