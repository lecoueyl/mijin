<template functional>
  <tr
    :ref="data.ref"
    class="align-top border-b border-gray-200"
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
  </tr>
</template>

<script>
export default {
  name: 'UiTableRow',

  props: {
  },
};
</script>
