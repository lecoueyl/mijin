export default {
  props: {
    size: {
      name: 'size',
      option: ['xs', 's', 'm'],
      default: 's',
      description: 'Input size',
    },
    type: {
      name: 'type',
      option: ['String'],
      default: 'text',
      description: 'Input type',
    },
    disabled: {
      name: 'disabled',
      option: ['Boolean'],
      default: 'false',
      description: 'Disable select',
    },
    withoutBorder: {
      name: 'without-border',
      option: ['Boolean'],
      default: 'false',
      description: 'Remove input border',
    },
  },
};
