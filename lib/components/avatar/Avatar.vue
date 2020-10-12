<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="flex items-center justify-center overflow-hidden "
    :class="[
      {
        [`h-6 w-6 text-${props.size}`]: props.size === 'sm',
        'h-8 w-8': props.size === 'base',
        [`h-12 w-12 text-${props.size}`]: props.size === 'lg',
        [`h-20 w-20 text-${props.size}`]: props.size === 'xl',
        'rounded-full': props.variant === 'rounded',
        'rounded-md': props.variant === 'squared',
        [`bg-${props.color}-500 text-${props.color}-100`]: props.color,
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
      v-if="props.letter"
      class="leading-none"
    >{{ props.letter }}</span>

    <img
      v-if="props.img"
      :alt="props.alt"
      :src="props.img"
      class="h-full w-full"
    >
  </Component>
</template>

<script>
export default {
  name: 'UiAvatar',

  props: {
    alt: {
      default: null,
      type: String,
    },

    color: {
      default: 'primary',
      type: String,
    },

    img: {
      default: null,
      type: String,
    },

    letter: {
      default: null,
      type: String,
    },

    size: {
      default: 'base',
      type: String,
      validator: (value) => [
        'sm',
        'base',
        'lg',
        'xl',
      ].includes(value),
    },

    tag: {
      default: 'span',
      type: String,
    },

    variant: {
      default: 'rounded',
      type: String,
      validator: (value) => [
        'rounded',
        'squared',
      ].includes(value),
    },
  },
};
</script>
