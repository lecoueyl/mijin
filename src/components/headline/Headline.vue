<template functional>
  <Component
    :is="props.tag || `h${props.level}`"
    :ref="data.ref"
    class="leading-tight"
    :class="[
      {
        'text-3xl sm:text-4xl md:text-5xl': (props.size || props.level) === 1,
        'text-2xl sm:text-3xl md:text-4xl': (props.size || props.level) === 2,
        'text-xl sm:text-2xl md:text-3xl': (props.size || props.level) === 3,
        'text-lg sm:text-xl md:text-2xl': (props.size || props.level) >= 4,
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
    <slot />
  </Component>
</template>

<script>
export default {
  name: 'UiHeadline',

  props: {
    level: {
      default: 1,
      type: [Number, String],
      validator(value) {
        const headlines = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        return headlines.includes(`h${value}`);
      },
    },

    size: {
      default: null,
      type: [Number, String],
    },

    tag: {
      default: null,
      type: String,
    },
  },
};
</script>
