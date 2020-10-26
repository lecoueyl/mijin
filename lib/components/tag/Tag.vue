<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="rounded-full px-3 py-px inline-block"
    :class="
      [
        {
          [`text-${props.textColor}`]: props.textColor,
        },
        `bg-${props.bgColor}`,
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
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </span>
    <template v-else>
      <slot />
    </template>
  </Component>
</template>

<script>
export default {
  name: 'UiTag',

  props: {
    bgColor: {
      default: 'gray-200',
      type: String,
    },

    removable: {
      default: false,
      type: Boolean,
    },

    tag: {
      default: 'span',
      type: String,
    },

    textColor: {
      default: null,
      type: String,
    },
  },
};
</script>
