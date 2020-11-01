<template functional>
  <thead
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
    <tr class="text-sm text-gray-700">
      <slot />
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'UiTableHead',

  props: {
  },
};
</script>
