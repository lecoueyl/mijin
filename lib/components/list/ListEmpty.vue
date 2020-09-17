<!-- TODO: dry duplicate code for default and column -->
<template>
  <li
    :class="[utilityClasses]"
    class="u-text-center u-pv-x4"
  >
    <slot />
  </li>
</template>

<script>
import { Base } from '../..';

export default {

  name: 'BlueberryVueListEmpty',
  extends: Base,

  created() {
    if (!this.$parent.$data.isList && !this.$parent.$parent.$data.isList) {
      this.$destroy();
      throw new Error('You should wrap <ListItem> with <List>');
    }
  },
};
</script>
