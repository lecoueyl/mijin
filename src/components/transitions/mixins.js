export default {
  inheritAttrs: false,

  props: {
    flip: {
      default: false,
      type: Boolean,
    },

    group: {
      default: false,
      type: Boolean,
    },

    tag: {
      default: 'span',
      type: String,
    },

    mode: {
      default: null,
      type: String,
      validator: (value) => [
        null,
        'in-out',
        'out-in',
      ].includes(value),
    },
  },

  computed: {
    transitionType() {
      return this.group ? 'transition-group' : 'transition';
    },
  },
};
