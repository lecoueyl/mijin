<template functional>
  <component
    :is="props.tag"
    :ref="data.ref"
    class="rounded-full inline-block"
    :class="
      [
        {
          // color
          'bg-blue-200 text-blue-900': props.color === 'blue',
          'bg-gray-200 text-gray-900': props.color === 'gray',
          'bg-green-200 text-green-900': props.color === 'green',
          'bg-indigo-200 text-indigo-900': props.color === 'indigo',
          'bg-orange-200 text-orange-900': props.color === 'orange',
          'bg-pink-200 text-pink-900': props.color === 'pink',
          'bg-primary-200 text-primary-900': props.color === 'primary',
          'bg-purple-200 text-purple-900': props.color === 'purple',
          'bg-red-200 text-red-900': props.color === 'red',
          'bg-teal-200 text-teal-900': props.color === 'teal',
          'bg-yellow-200 text-yellow-900': props.color === 'yellow',
          // size
          'text-sm px-2 py-1 leading-none': props.size === 'sm',
          'px-3 py-2 leading-none': props.size === 'base',
        },
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
    <span
      v-if="props.removable"
      class="flex items-center"
    >
      <slot />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="none"
        role="presentation"
        class="stroke-2 w-4 h-4 ml-1 cursor-pointer hover:text-gray-700 transition-colors duration-150 ease-in-out"
        v-on="listeners.remove ? { click: listeners.remove } : null"
      >
        <line
          x1="18"
          y1="6"
          x2="6"
          y2="18"
        />
        <line
          x1="6"
          y1="6"
          x2="18"
          y2="18"
        />
      </svg>
    </span>

    <template v-else>
      <slot />
    </template>
  </component>
</template>

<script>
const validator = {
  color: [
    'blue',
    'gray',
    'green',
    'indigo',
    'orange',
    'pink',
    'primary',
    'purple',
    'red',
    'teal',
    'yellow',
  ],
  size: [
    'sm',
    'base',
  ],
};

export default {
  name: 'MijinTag',

  validator,

  props: {
    color: {
      default: 'gray',
      type: String,
      validator: (value) => validator.color.includes(value),
    },

    removable: {
      default: false,
      type: Boolean,
    },

    size: {
      default: 'base',
      type: String,
      validator: (value) => validator.size.includes(value),
    },

    tag: {
      default: 'span',
      type: String,
    },
  },
};
</script>
