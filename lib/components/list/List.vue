<template>
  <transition-group
    v-if="animated"
    :class="[classes, utilityClasses]"
    name="o-anim-fade-y"
    tag="ul"
    class="o-list c-list"
  >
    <slot />
    <Loading
      v-if="isLoading"
      key="loading"
    />
  </transition-group>
  <ul
    v-else
    :class="[classes, utilityClasses]"
    class="o-list c-list"
  >
    <slot />
    <Loading
      v-if="isLoading"
      key="loading"
      class="u-12/12"
    />
  </ul>
</template>

<script>
import { Base } from '../..';
import Loading from '../loading/Loading';

export default {

  name: 'BlueberryVueList',

  components: {
    Loading,
  },
  extends: Base,

  props: {
    gutter: {
      type: String,
      default: null,
    },
    bordered: {
      type: Boolean,
      default: null,
    },
    divided: {
      type: Boolean,
      default: null,
    },
    animated: {
      type: Boolean,
      default: null,
    },
    isLoading: {
      type: Boolean,
      default: null,
    },
    type: {
      type: String,
      default: 'block',
      validator: (value) => [
        'inline',
        'block',
        'span',
      ].indexOf(value) >= 0,
    },
    align: {
      type: String,
      default: null,
      validator: (value) => [
        'top',
        'middle',
        'bottom',
      ].indexOf(value) >= 0,
    },
  },

  data() {
    return {
      isList: true, // used by ListItem
      isDivided: false, // used by ListItem
    };
  },

  computed: {
    classes() {
      return {
        [`o-list--${this.type}`]: this.type,
        [`o-list--${this.gutter}`]: this.gutter,
        [`o-list--${this.align}`]: this.align,
        'c-list--with-border': this.bordered,
      };
    },
  },

  mounted() {
    this.isDivided = this.divided;
  },
};
</script>
