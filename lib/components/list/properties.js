export default {
  propsList: {
    isLoading: {
      name: 'is-loading',
      option: ['Boolean'],
      default: false,
      description: 'Show loading',
    },
    animated: {
      name: 'animated',
      option: ['Boolean'],
      default: false,
      description: 'Add transition animation to the list',
    },
    bordered: {
      name: 'bordered',
      option: ['Boolean'],
      default: false,
      description: 'Add border around the list',
    },
    divided: {
      name: 'divided',
      option: ['Boolean'],
      default: false,
      description: 'Add border to children item',
    },
  },
  propsTitle: {
    sticky: {
      name: 'sticky',
      option: ['Boolean'],
      default: false,
      description: 'Stick title row on scroll',
    },
  },
  propsItem: {
    to: {
      name: 'to',
      option: ['String', 'Object'],
      default: null,
      description: 'Router link path',
    },
    exact: {
      name: 'exact',
      option: ['Boolean'],
      default: false,
      description: 'Exact matches route',
    },
    align: {
      name: 'align',
      option: ['top', 'middle', 'bottom'],
      default: null,
      description: 'Items aligment',
    },
  },
  propsColumn: {
    fluid: {
      name: 'fluid',
      option: ['Boolean'],
      default: false,
      description: 'Set column a fluid size instead of fixed',
    },
  },
  propsSort: {
    sort: {
      name: 'sort',
      option: ['null', 'asc', 'desc'],
      default: null,
      description: 'Add a sort icon',
    },
  },
};
