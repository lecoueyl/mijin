export default {
  props: {
    disabled: {
      name: 'disabled',
      option: ['Boolean'],
      default: 'false',
      description: 'Disable toggle',
    },
    size: {
      name: 'size',
      option: ['xs', 's'],
      default: 's',
      description: 'Toggle size',
    },
    align: {
      name: 'align',
      option: ['top', 'middle', 'bottom'],
      default: 'top',
      description: 'Align item vertically',
    },
  },
};
