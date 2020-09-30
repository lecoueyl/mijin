<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="relative font-medium border transition-colors duration-100 cursor-pointer focus:outline-none"
    :class="[
      {
        // variant
        'text-white border-primary-500 bg-primary-500 hover:border-primary-600 hover:bg-primary-600 focus:bg-primary-600':
          props.variant === 'primary' && !props.disabled,
        'text-foreground border-gray-300 hover:border-foreground': props.variant === 'secondary' && !props.disabled,
        // disabled
        'border-gray-300 bg-gray-200 text-gray-600 cursor-not-allowed': props.disabled,
        // icon
        'inline-flex items-center': $slots.icon || props.icon,
        'flex-row-reverse': props.iconRight,
        // size
        'px-6 py-1': $slots.default && props.size === 'sm',
        'px-6 py-2': $slots.default && props.size === 'base',
        'px-16 py-4': $slots.default && props.size === 'lg',
        'px-4 py-2': !$slots.default,
        // group
        'rounded-lg': props.group === false,
        'rounded-l-lg': props.group === 'first',
        'rounded-r-lg': props.group === 'last',
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
    :aria-disabled="props.tag !== 'button' && props.disabled ? 'true' : null"
    :disabled="props.disabled || props.loading"
    :type="props.tag === 'button' ? props.type : null"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <!-- <div
      v-if="props.loading"
      class="absolute w-full h-full inset-0 cursor-not-allowed"
      :class="[
        {
          // variant
          'bg-primary-500': props.variant === 'primary',
          'text-foreground border-gray-300 hover:border-foreground': props.variant === 'secondary',
          // group
          'rounded-lg': props.group === false,
          'rounded-l-lg': props.group === 'first',
          'rounded-r-lg': props.group === 'last',
        },
        data.class,
        data.staticClass,
      ]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="absolute inset-0 w-8 h-8 m-auto"
      >
        <circle class="animate-bounce" cx="12" cy="12" r="1" />
        <circle class="animate-bounce delay-150" cx="19" cy="12" r="1" />
        <circle class="animate-bounce" cx="5" cy="12" r="1" />
      </svg>
    </div> -->
    <svg
      v-if="props.icon"
      class="fill-current w-4 h-4"
      :class="[{
        'mr-2': $slots.default && !props.iconRight,
        'ml-2': $slots.default && props.iconRight,
      }]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
    </svg>
    <span
      v-if="$slots.icon"
      class="w-4 h-4 inline-block"
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
export default {
  name: 'UiButton',

  props: {
    disabled: {
      default: false,
      type: Boolean,
    },

    group: {
      default: false,
      type: [String, Boolean],
      validator: (value) => [
        false,
        true,
        '',
        'first',
        'last',
      ].includes(value),
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
      validator: (value) => [
        'sm',
        'base',
        'lg',
      ].includes(value),
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
      validator: (value) => [
        'primary',
        'secondary',
      ].includes(value),
    },
  },
};
</script>
