export default {
  props: {
    tagName: {
      name: 'tag-name',
      option: ['String'],
      default: 'section',
      description: 'Component tag name',
    },
    paddingVertical: {
      name: 'padding-vertical',
      option: ['none', 'half', 'x2', 'x3', 'x4', 'x6', 'x8', 'x10'],
      default: 'x4',
      description: 'padding-top & padding-bottom',
    },
    paddingHorizontal: {
      name: 'padding-horizontal',
      option: ['none', 'half', 'x2', 'x3', 'x4', 'x6', 'x8', 'x10'],
      default: 'x4',
      description: 'padding-right & padding-left',
    },
  },
};
