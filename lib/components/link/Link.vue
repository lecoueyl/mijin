<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="transition duration-150 ease-in-out inline-block"
    :class="[
      props.color ? `text-${color}` : 'text-primary-500',
      props.colorHover ? `hover:text-${colorHover}` : 'hover:text-primary-900',
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
    <span :class="[{ 'flex': props.external }]">
      <slot />
      <svg
        v-if="props.external"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="none"
        role="presentation"
        class="stroke-2 w-4 ml"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </span>
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
