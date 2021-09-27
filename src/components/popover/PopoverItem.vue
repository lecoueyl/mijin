<template functional>
  <component
    :is="props.tag"
    :ref="data.ref"
    class="px-2 py-1 block rounded transition-colors duration-100 ease-in-out"
    :class="[
      {
        'flex items-center': $slots.prefix || $slots.suffix,
        'hover:bg-gray-100 dark:hover:bg-gray-800': props.variant === 'base' && !props.disabled,
        'hover:text-danger-500 hover:bg-danger-50 dark:hover:text-danger-50 dark:hover:bg-danger-900': props.variant === 'danger' && !props.disabled,
        'opacity-70': props.disabled,
        'cursor-pointer': !props.disabled,
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
      v-if="$slots.prefix"
      class="inline-flex items-center mr-2"
    >
      <slot name="prefix" />
    </span>
    <span :class="{ 'flex-1': $slots.prefix || $slots.suffix }">
      <slot />
    </span>
    <span
      v-if="$slots.suffix"
      class="inline-flex items-center ml-1"
    >
      <slot name="suffix" />
    </span>
  </component>
</template>

<script>
const validator = {
  variant: [
    'base',
    'danger',
  ],
};

export default {
  name: 'MijinPopoverItem',

  validator,

  props: {
    disabled: {
      default: false,
      type: Boolean,
    },

    variant: {
      default: 'base',
      type: String,
      validator: (value) => validator.variant.includes(value),
    },

    tag: {
      default: 'div',
      type: String,
    },
  },
};
</script>
