export default {
  props: {
    color: {
      name: 'color',
      option: ['String'],
      default: 'default',
      description: 'Link color',
    },
    href: {
      name: 'href',
      option: ['String'],
      default: null,
      description: 'Href link',
    },
    target: {
      name: 'target',
      option: ['String'],
      default: null,
      description: 'Target link',
    },
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
    activeClass: {
      name: 'active-class',
      option: ['Boolean'],
      default: 'false',
      description: 'Router link active-class',
    },
    iconSize: {
      name: 'size',
      option: ['s', 'm'],
      default: 's',
      description: 'Icon size',
    },
  },
};
