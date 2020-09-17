export default {
  props: {
    data: {
      name: 'data',
      option: ['[{ x: 1, y: 200 }]'],
      default: null,
      description: 'Data to show',
    },
    width: {
      name: 'width',
      option: ['Number'],
      default: '100%',
      description: 'Chart width',
    },
    height: {
      name: 'height',
      option: ['Number'],
      default: '100%',
      description: 'Chart height',
    },
    highlights: {
      name: 'highlights',
      option: ['[{ startX: 1, endX: 2 }]'],
      default: null,
      description: 'Highlight a portion of the chart',
    },
    bordered: {
      name: 'bordered',
      option: ['Boolean'],
      default: 'false',
      description: 'Add border around the chart',
    },
  },
};
