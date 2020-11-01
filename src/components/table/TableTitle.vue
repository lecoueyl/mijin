<template functional>
  <th
    :ref="data.ref"
    class="py-2 font-medium sticky top-0"
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
  </th>
</template>

<script>
export default {
  name: 'UiTableTitle',

  props: {
  },
};
</script>
