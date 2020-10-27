<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="transition-colors duration-150 ease-in-out inline-block"
    :class="[
      props.color ? `text-${props.color}` : 'text-primary-500',
      props.colorHover ? `hover:text-${props.colorHover}` : 'hover:text-primary-600',
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
      v-if="props.external"
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
        class="stroke-2 w-4 h-4 ml"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </span>
    <template v-else>
      <slot />
    </template>
  </Component>
</template>

<script>
export default {
  name: 'UiLink',

  props: {
    color: {
      default: null,
      type: String,
    },

    colorHover: {
      default: null,
      type: String,
    },

    external: {
      default: false,
      type: Boolean,
    },

    tag: {
      default: 'a',
      type: String,
    },
  },
};
</script>
