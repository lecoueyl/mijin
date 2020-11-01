<template functional>
  <table
    :ref="data.ref"
    class="w-full"
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
  </table>
</template>

<script>
export default {
  name: 'UiTable',

  props: {
    density: {
      default: 'normal',
      type: String,
      validator: (value) => [
        'tight',
        'normal',
      ].includes(value),
    },
  },
};
</script>
