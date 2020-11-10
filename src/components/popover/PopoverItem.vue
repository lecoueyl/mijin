<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="px-2 py-1 block rounded hover:bg-gray-200 cursor-pointer transition-colors duration-100 ease-in-out"
    :class="[
      {
        'flex items-center': $slots.icon,
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
      v-if="$slots.icon"
      class="w-4 h-4 inline-block mr-1"
    >
      <slot name="icon" />
    </span>
    <slot />
  </Component>
</template>

<script>
export default {
  name: 'UiPopoverItem',

  props: {
    tag: {
      default: 'div',
      type: String,
    },
  },
};
</script>
