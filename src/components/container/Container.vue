<template functional>
  <component
    :is="props.tag"
    :ref="data.ref"
    class="container mx-auto"
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
  name: 'MijinContainer',

  props: {
    tag: {
      default: 'div',
      type: String,
    },
  },
};
</script>
