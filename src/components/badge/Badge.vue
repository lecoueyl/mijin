<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="rounded-full inline-block leading-tight"
    :class="
      [
        {
          [`bg-${props.bgColor} text-${props.textColor}`]: props.variant === 'fill',
          [`text-${props.bgColor} border border-${props.bgColor}`]: props.variant === 'outline',
          'text-sm px-2 py-px': props.size === 'sm',
          'px-2': props.size === 'base',
        },
        `text-${props.textColor}`,
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
    <slot />
  </Component>
</template>

<script>
export default {
  name: 'UiBadge',

  props: {
    bgColor: {
      default: 'foreground',
      type: String,
    },
    size: {
      default: 'base',
      type: String,
      validator: (value) => [
        'sm',
        'base',
      ].includes(value),
    },

    tag: {
      default: 'span',
      type: String,
    },

    textColor: {
      default: 'background',
      type: String,
    },

    variant: {
      default: 'fill',
      type: String,
      validator: (value) => [
        'outline',
        'fill',
      ].includes(value),
    },
  },
};
</script>
