<template functional>
  <Component
    :is="props.tag || ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'][props.level - 1]"
    :ref="data.ref"
    class="font-light leading-tight"
    :class="[
      ...((props.size || props.level) === 1 ? ['text-3xl sm:text-4xl md:text-5xl'] : []),
      ...((props.size || props.level) === 2 ? ['text-2xl sm:text-3xl md:text-4xl'] : []),
      ...((props.size || props.level) === 3 ? ['text-1xl sm:text-2xl md:text-3xl'] : []),
      ...((props.size || props.level) >= 4 ? ['text-xl sm:text-1xl md:text-2xl'] : []),
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
const UiHeadline = {
  name: 'UiHeadline',
  props: {
    level: {
      required: true,
      type: Number,
    },
    size: {
      default: null,
      type: Number,
    },
    tag: {
      default: null,
      type: String,
    },
  },
};
export default UiHeadline;
</script>
