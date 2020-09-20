<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="font-medium border py-2 px-4 rounded transition-colors duration-100 cursor-pointer
      focus:outline-none"
    :class="[
      $options.classes(props),
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
  name: 'UiButton',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    loading: {
      type: Boolean,
      default: false,
    },

    size: {
      default: null,
      type: Number,
    },

    tag: {
      default: 'button',
      type: String,
    },

    type: {
      default: 'primary',
      type: String,
      validator: (value) => [
        'primary',
        'secondary',
      ].includes(value),
    },
  },

  classes(props) {
    return {
      'text-white border-primary-500 bg-primary-500 hover:border-primary-600 hover:bg-primary-600 focus:bg-primary-600':
      props.type === 'primary' && !props.disabled,

      'text-foreground border-gray-300 hover:border-foreground':
      props.type === 'secondary' && !props.disabled,

      'border-gray-300 bg-gray-200 text-gray-600 cursor-not-allowed':
      props.disabled,
    };
  },
};
</script>
