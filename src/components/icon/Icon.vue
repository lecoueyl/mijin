<template>
  <svg
    class="stroke-2 inline-block"
    :class="{
      'h-3 w-3': size === 'sm',
      'h-4 w-4': size === 'base',
      'h-5 w-5': size === 'lg',
    }"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g v-html="icons[name]" />
  </svg>
</template>

<script>
import featherIcons from 'feather-icons/dist/icons.json';
import { options } from '../../index';

const validator = {
  size: [
    'sm',
    'base',
    'lg',
  ],
};

export default {
  name: 'MijinIcon',

  validator,

  props: {
    name: {
      required: true,
      type: String,
    },

    size: {
      default: 'base',
      type: String,
      validator: (value) => validator.size.includes(value),
    },
  },

  data() {
    return {
      icons: featherIcons,
    };
  },

  created() {
    this.icons = { ...featherIcons, ...options.extendIcons };

    if (!this.icons[this.name]) throw new Error(`${this.name} icon is not available. You can pass it as an option in Mijin plugin configuration`);
  },
};
</script>
