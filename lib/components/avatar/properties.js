export default {
  props: {
    shape: {
      name: 'shape',
      option: ['square', 'round'],
      default: 'round',
      description: 'Avatar shape',
    },
    size: {
      name: 'size',
      option: ['xs', 's', 'm', 'l'],
      default: 's',
      description: 'Avatar size',
    },
    color: {
      name: 'color',
      option: ['String'],
      default: 'wash-medium',
      description: 'Avatar color',
    },
    picture: {
      name: 'picture',
      option: ['String'],
      default: null,
      description: 'Link of a picture to display in background',
    },
    icon: {
      name: 'icon',
      option: ['String'],
      default: null,
      description: 'Icon to display',
    },
  },
};
