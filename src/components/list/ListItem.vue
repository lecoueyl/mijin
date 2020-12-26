<template>
  <li
    :class="[
      listProps && listProps.inline ? 'float-left first:pl-0 last:pr-0' : 'list-item first:pt-0 last:pb-0',
      {
        // gutter
        'py-1':listProps && !listProps.inline && listProps.gutter === 'base',
        'px-1':listProps && listProps.inline && listProps.gutter === 'base',
        'py-2':listProps && !listProps.inline && listProps.gutter === 'lg',
        'px-2':listProps && listProps.inline && listProps.gutter === 'lg',
      },
    ]"
  >
    <slot />
  </li>
</template>

<script>
export default {
  name: 'UiListItem',

  computed: {
    listProps() {
      return this.$parent?.$props;
    },
  },

  created() {
    if (this.$parent.$options.name !== 'UiList' && process.env.NODE_ENV !== 'test') {
      this.$destroy();
      throw new Error('ListItem must be wrap with List');
    }
  },
};
</script>
