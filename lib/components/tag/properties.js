export default {
  props: {
    size: {
      name: 'size',
      option: ['xxs', 'xs', 's', 'l'],
      default: 's',
      description: 'Tag size',
    },
    color: {
      name: 'color',
      option: ['String'],
      default: 'foreground',
      description: 'Tag color',
    },
    type: {
      name: 'type',
      option: ['outline', 'fill', 'code'],
      default: 'outline',
      description: 'Tag type',
    },
  },
};
