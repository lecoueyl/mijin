export default {
  props: {
    type: {
      name: 'type',
      option: ['month', 'range'],
      default: null,
      description: 'Type of picker',
    },
    position: {
      name: 'position',
      option: ['left', 'center', 'right'],
      default: 'center',
      description: 'Popover position',
    },
    value: {
      name: 'value',
      option: ['Date'],
      default: null,
      description: 'Select a date',
    },
    valueStart: {
      name: 'valueStart',
      option: ['Date'],
      default: null,
      description: 'Select a start date',
    },
    valueEnd: {
      name: 'valueEnd',
      option: ['Date'],
      default: null,
      description: 'Select a end date',
    },
    disabledFromNow: {
      name: 'disabledFromNow',
      option: ['Boolean'],
      default: false,
      description: 'Disable all date selection after today',
    },
    disabledUntilNow: {
      name: 'disabledUntilNow',
      option: ['Boolean'],
      default: false,
      description: 'Disable all date selection before today',
    },
    timeAccess: {
      name: 'timeAccess',
      option: ['default', 'past', 'future'],
      default: 'default',
      description: 'Select which quick range options to show',
    },
  },
  slots: {
    default: {
      name: 'default',
      required: true,
      description: 'Date container and popover trigger',
    },
  },
  events: {
    selected: {
      name: '@selected',
      return: `Single: Date, formatted date.
Range: { start: Date , end: Date }, formatted date`,
      description: 'Return date when selected',
    },
  },
  methods: {
    formatDate: {
      name: 'formatDate',
      return: 'string',
      description: 'Localize the datetime',
    },
  },
};
