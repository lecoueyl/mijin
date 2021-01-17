<template>
  <svg
    :aria-labelledby="name"
    class="stroke-2"
    :class="{
      'h-3 w-3': size === 'sm',
      'h-4 w-4': size === 'base',
      'h-5 w-5': size === 'lg',
    }"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    role="presentation"
    stroke-linecap="round"
    stroke-linejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g v-html="icons[name]" />
  </svg>
</template>

<script>
import featherIcons from 'feather-icons/dist/icons.json';

export default {
  name: 'MijinIcon',

  props: {
    name: {
      required: true,
      type: String,
    },

    size: {
      default: 'base',
      type: String,
      validator: (value) => [
        'sm',
        'base',
        'lg',
      ].includes(value),
    },
  },

  data() {
    return {
      icons: featherIcons,
    };
  },
};
</script>
