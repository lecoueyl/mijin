<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="font-medium border py-2 px-6 rounded-lg transition-colors duration-100 cursor-pointer
      focus:outline-none"
    :class="[
      {
        'text-white border-primary-500 bg-primary-500 hover:border-primary-600 hover:bg-primary-600 focus:bg-primary-600':
          props.type === 'primary' && !props.disabled,
        'text-foreground border-gray-300 hover:border-foreground': props.type === 'secondary' && !props.disabled,
        'border-gray-300 bg-gray-200 text-gray-600 cursor-not-allowed': props.disabled,
        'inline-flex items-center': props.icon,
        'flex-row-reverse': props.iconRight,
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
    <svg
      v-if="props.icon"
      class="fill-current w-4 h-4"
      :class="[props.iconRight ? 'ml-2' : 'mr-2']"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
    </svg>

    <slot />
  </Component>
</template>

<script>
export default {
  name: 'UiButton',

  props: {
    disabled: {
      default: false,
      type: Boolean,
    },

    icon: {
      default: null,
      type: String,
    },

    iconRight: {
      default: false,
      type: Boolean,
    },

    loading: {
      default: false,
      type: Boolean,
    },

    size: {
      default: null,
      type: Number,
    },

    tag: {
      default: 'button',
      type: String,
    },

    type: {
      default: 'primary',
      type: String,
      validator: (value) => [
        'primary',
        'secondary',
      ].includes(value),
    },
  },
};
</script>
