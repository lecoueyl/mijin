<template>
  <tr
    class="border-b border-gray-200"
    :class="`align-${verticalAlign}`"
  >
    <slot />
  </tr>
</template>

<script>
export default {
  name: 'UiTableRow',

  props: {
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
