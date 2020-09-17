export default {
  props: {
    size: {
      type: String,
      default: 's',
      validator: (value) => [
        'xxl',
        'xl',
        'l',
        'm',
        's',
        'xs',
        'xxs',
      ].indexOf(value) >= 0,
    },
  },

  computed: {
    classes() {
      return {
        [`o-type-${this.size}`]: this.size,
      };
    },
  },
};
