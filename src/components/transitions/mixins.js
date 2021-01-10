export default {
  inheritAttrs: false,
  props: {
    /**
     * Whether the component should be a `transition-group` component.
     */
    group: Boolean,
    /**
     * Transition tag, in case the component is a `transition-group`
     */
    tag: {
      type: String,
      default: 'span',
    },
  },
  computed: {
    transitionType() {
      return this.group ? 'transition-group' : 'transition';
    },
  },
};
