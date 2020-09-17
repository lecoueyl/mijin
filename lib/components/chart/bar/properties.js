export default {
  props: {
    data: {
      name: 'data',
      option: ['Array', 'Object'],
      default: null,
      description: 'Data to show',
    },
    format: {
      name: 'format',
      option: ['Function'],
      default: null,
      description: 'Function to format data display',
    },
    formatTooltip: {
      name: 'format-tooltip',
      option: ['Function'],
      default: null,
      description: 'Function to format tooltip data display',
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
    yLabel: {
      name: 'y-label',
      option: ['String'],
      default: '',
      description: 'y-axis label',
    },
  },
  methods: {
    rerender: {
      name: 'rerender',
      return: null,
      description: 'Rerender the chart',
    },
  },
};
