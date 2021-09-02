<template functional>
  <component
    :is="props.tag"
    :ref="data.ref"
    class="-mb-px pb-2 transition-colors duration-150 ease-in-out"
    :class="[
      {
        'border-b-2 border-primary-500 text-primary-500': props.selected,
        'hover:text-primary-500': !props.disabled,
        'cursor-pointer': !props.disabled,
        'cursor-not-allowed': props.disabled,
        'cursor-not-allowed text-gray-500': props.disabled && !props.selected,
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
  </component>
</template>

<script>
export default {
  name: 'MijinTabsItem',

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
