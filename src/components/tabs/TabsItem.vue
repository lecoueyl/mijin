<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="pb-2 transition-colors duration-150 ease-in-out"
    :class="[
      {
        'border-b-2 border-primary-500 text-primary-500': props.selected,
        'hover:text-primary-500': !props.disabled,
        'cursor-pointer': !props.disabled,
        'cursor-not-allowed text-gray-500': props.disabled,
      },
      data.class,
      data.staticClass,
    ]"
    :style="[
      data.style,
      data.staticStyle,
    ]"
    :aria-disabled="props.disabled ? 'true' : null"
    :aria-selected="props.selected ? 'true' : 'false'"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  name: 'MijinTabs',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    selected: {
      type: Boolean,
      default: false,
    },

    tag: {
      default: 'li',
      type: String,
    },
  },
};
</script>
