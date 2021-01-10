export default {
  inheritAttrs: false,

  props: {
    group: {
      default: false,
      type: Boolean,
    },

    tag: {
      default: 'span',
      type: String,
    },
  },

  computed: {
    transitionType() {
      return this.group ? 'transition-group' : 'transition';
    },
  },
};
