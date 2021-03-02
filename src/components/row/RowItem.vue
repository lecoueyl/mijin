<template>
  <component
    :is="tag"
    :class="[
      grow ? 'flex-grow' : 'flex-none',
      {
        // gutter
        'px-2':rowProps && rowProps.gutter === 'base',
        'px-4':rowProps && rowProps.gutter === 'm',
        'px-8':rowProps && rowProps.gutter === 'lg',
      },
    ]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'MijinRowColumn',

  props: {
    grow: {
      default: false,
      type: Boolean,
    },

    tag: {
      default: 'div',
      type: String,
    },
  },

  computed: {
    rowProps() {
      return this.$parent?.$props;
    },
  },

  created() {
    if (this.$parent.$options.name !== 'MijinRow') {
      this.$destroy();
      throw new Error('RowColumn must be wrap with Row');
    }
  },
};
</script>
