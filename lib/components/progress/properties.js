export default {
  props: {
    percentage: {
      name: 'percentage',
      option: ['Number (between 0 and 100)'],
      default: '0',
      description: 'Progress percentage',
    },
    type: {
      name: 'type',
      option: ['line', 'circle', 'score'],
      default: 'linear',
      description: 'Progress type',
    },
    color: {
      name: 'color',
      option: ['String'],
      default: 'highlight',
      description: 'Highlight color',
    },
    score: {
      name: 'score-length',
      option: ['Number (between 3 and 5)'],
      default: '3',
      description: 'Score length',
    },
  },
};
