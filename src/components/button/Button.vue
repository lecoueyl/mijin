<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="relative leading-tight font-medium border transition-colors duration-150 cursor-pointer focus:outline-none"
    :class="[
      {
        // variant
        'text-primary-50 border-primary-500 bg-primary-500 hover:border-primary-600 hover:bg-primary-600 focus:bg-primary-600':
          props.variant === 'primary' && !props.disabled,
        'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500': props.variant === 'secondary' && !props.disabled,
        // disabled
        'border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 cursor-not-allowed': props.disabled,
        // icon
        'inline-flex items-center': $slots.icon || props.icon,
        'flex-row-reverse': props.iconRight,
        // size
        'px-3 py-1': $slots.default && props.size === 'sm',
        'px-5 py-2': $slots.default && props.size === 'base',
        'px-10 py-4': $slots.default && props.size === 'lg',
        'px-3 py-2': !$slots.default,
        // group
        'rounded-button': props.group === false,
        'rounded-l-button': props.group === 'first',
        'rounded-r-button': props.group === 'last',
        // loading
        'animate-pulse cursor-wait': props.loading
      },
      data.class,
      data.staticClass,
    ]"
    :style="[
      data.style,
      data.staticStyle,
    ]"
    :aria-busy="props.loading ? 'true' : null"
    :aria-disabled="props.tag !== 'button' && props.disabled ? 'true' : null"
    :disabled="props.disabled || props.loading"
    :type="props.tag === 'button' ? props.type : null"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <span
      v-if="$slots.icon"
      class="w-4 h-4 inline-flex items-center"
      :class="[{
        'mr-1': $slots.default && !props.iconRight,
        'ml-1': $slots.default && props.iconRight,
      }]"
    >
      <slot name="icon" />
    </span>
    <slot />
    <span v-if="!$slots.default">&#8203;</span>
  </Component>
</template>

<script>
const validator = {
  group: [
    false,
    true,
    '',
    'first',
    'last',
  ],
  size: [
    'sm',
    'base',
    'lg',
  ],
  variant: [
    'primary',
    'secondary',
  ],
};

export default {
  name: 'MijinButton',

  validator,

  props: {
    disabled: {
      default: false,
      type: Boolean,
    },

    group: {
      default: false,
      type: [String, Boolean],
      validator: (value) => validator.group.includes(value),
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
      default: 'base',
      type: String,
      validator: (value) => validator.size.includes(value),
    },

    tag: {
      default: 'button',
      type: String,
    },

    type: {
      type: String,
      default: 'button',
    },

    variant: {
      default: 'primary',
      type: String,
      validator: (value) => validator.variant.includes(value),
    },
  },
};
</script>
