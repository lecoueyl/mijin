<template functional>
  <td
    :ref="data.ref"
    class="py-2"
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
  </td>
</template>

<script>
export default {
  name: 'UiTableCell',

  props: {
  },
};
</script>
