export default {
  props: {
    data: {
      name: 'data',
      option: ['[{ label: \'Blueberry\', value: 200, label: \'purple\' }]'],
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
  },
  methods: {
    rerender: {
      name: 'rerender',
      return: null,
      description: 'Rerender the chart',
    },
  },
};
