export default {
  props: {
    type: {
      name: 'type',
      option: ['inline', 'block', 'segmented', 'pills', 'border', 'link'],
      default: 'inline',
      description: 'Type of tabs',
    },
    active: {
      name: 'active',
      option: ['Boolean'],
      default: 'false',
      description: 'Tabitem active item',
    },
    bordered: {
      name: 'bordered',
      option: ['Boolean'],
      default: 'false',
      description: 'Add border to the tab container',
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
    gutter: {
      name: 'gutter',
      option: ['String'],
      default: ['none', 'xs', 'm'],
      description: 'Extra gutter space',
    },
  },
};
