export default {
  props: {
    size: {
      name: 'size',
      option: ['xs', 's', 'm'],
      default: 's',
      description: 'Badge size',
    },
    status: {
      name: 'color',
      option: ['success', 'warning', 'error'],
      default: 'success',
      description: 'Badge status',
    },
    number: {
      name: 'number',
      option: ['String'],
      default: null,
      description: 'Display a number',
    },
  },
};
