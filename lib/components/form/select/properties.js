export default {
  props: {
    disabled: {
      name: 'disabled',
      option: ['Boolean'],
      default: 'false',
      description: 'Disable select',
    },
    size: {
      name: 'size',
      option: ['xs', 's', 'm'],
      default: 's',
      description: 'Input size',
    },
    withoutBorder: {
      name: 'without-border',
      option: ['Boolean'],
      default: 'false',
      description: 'Remove input border',
    },
  },
};
