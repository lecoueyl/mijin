<template>
  <tr
    class="border-b border-gray-200"
    :class="[
      {
        'hover:bg-gray-100 cursor-pointer': clickable,
      },
      `align-${verticalAlign}`
    ]"
  >
    <slot />
  </tr>
</template>

<script>
export default {
  name: 'UiTableRow',

  props: {
    clickable: {
      default: false,
      type: Boolean,
    },

    verticalAlign: {
      default: 'top',
      type: String,
      validator: (value) => [
        'baseline',
        'bottom',
        'middle',
        'text-bottom',
        'text-top',
        'top',
      ].includes(value),
    },
  },
};
</script>
