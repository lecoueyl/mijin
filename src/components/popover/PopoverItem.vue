<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="px-2 py-1 block rounded cursor-pointer transition-colors duration-100 ease-in-out"
    :class="[
      {
        'flex items-center': $slots.action || $slots.icon,
        'hover:bg-gray-100 dark:hover:bg-gray-800': props.variant === 'base',
        'hover:text-red-500 hover:bg-red-200': props.variant === 'danger',
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
      class="w-4 h-4 mr-2"
    >
      <slot name="icon" />
    </span>
    <span :class="{ 'flex-1': $slots.action || $slots.icon }">
      <slot />
    </span>
    <span
      v-if="$slots.action"
      class="ml-1"
    >
      <slot name="action" />
    </span>
  </Component>
</template>

<script>
export default {
  name: 'UiPopoverItem',

  props: {
    variant: {
      default: 'base',
      type: String,
      validator: (value) => [
        'base',
        'danger',
      ].includes(value),
    },

    tag: {
      default: 'div',
      type: String,
    },
  },
};
</script>
