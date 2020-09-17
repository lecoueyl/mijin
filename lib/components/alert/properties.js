export default {
  props: {
    status: {
      name: 'color',
      option: ['success', 'warning', 'error'],
      default: 'success',
      description: 'Alert status',
    },
    bordered: {
      name: 'bordered',
      option: ['Boolean'],
      default: 'false',
      description: 'Add border around the alert',
    },
  },
};
