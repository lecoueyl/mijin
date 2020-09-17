export default {
  props: {
    type: {
      name: 'type',
      option: ['default', 'border'],
      default: 'default',
      description: 'Radio shape',
    },
    disabled: {
      name: 'disabled',
      option: ['Boolean'],
      default: 'false',
      description: 'Disable select',
    },
  },
};
