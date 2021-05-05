<template functional>
  <component
    :is="props.tag"
    :ref="data.ref"
    class="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-md space-x-1"
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
  name: 'MijinSegmentedControl',

  props: {
    tag: {
      default: 'nav',
      type: String,
    },
  },
};
</script>
