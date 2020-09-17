<template>
  <div
    v-if="fluid"
    :class="[utilityClasses]"
    class="o-media__fluid c-list__columm"
  >
    <slot />
  </div>

  <div
    v-else
    :class="[utilityClasses]"
    class="o-media__fixed c-list__columm"
  >
    <slot />
  </div>
</template>

<script>
import { Base } from '../..';

export default {

  name: 'BlueberryVueListColumn',
  extends: Base,

  props: {
    fluid: {
      type: Boolean,
      default: null,
    },
  },

  data() {
    return {
      isListColumn: true, // used by parent
    };
  },

  // created() {
  //   if (!this.$parent.$data.isListItem) {
  //     this.$destroy();
  //     throw new Error('You should wrap <ListColumn> with <ListItem>');
  //   }
  // },
};
</script>
