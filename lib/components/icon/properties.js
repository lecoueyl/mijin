export default {
  props: {
    alignText: {
      name: 'align-text',
      option: ['Boolean'],
      default: 'false',
      description: 'Align icon within text',
    },
    name: {
      name: 'name',
      option: ['String'],
      default: 'user',
      description: 'Icon to display',
    },
    type: {
      name: 'type',
      option: ['stroke', 'glyph'],
      default: 'stroke',
      description: 'Icon type',
    },
    color: {
      name: 'color',
      option: ['String'],
      default: 'default',
      description: 'Icon color',
    },
    size: {
      name: 'size',
      option: ['s', 'm', 'l', 'xl'],
      default: 's',
      description: 'Icon size',
    },
  },
};
