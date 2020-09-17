export default {
  props: {
    position: {
      name: 'position',
      option: ['top', 'right', 'bottom', 'left'],
      default: 'bottom',
      description: 'Popover position',
    },
    align: {
      name: 'align',
      option: ['top', 'right', 'bottom', 'left'],
      default: null,
      description: 'Popover alignment',
    },
    size: {
      name: 'size',
      option: ['s', 'm', 'l'],
      default: null,
      description: 'Add a size to the dropdown',
    },
  },
  slots: {
    default: {
      name: 'default',
      required: true,
      description: 'Trigger popover',
    },
    popover: {
      name: 'popover',
      required: true,
      description: 'Popover content',
    },
  },
  methods: {
    toggle: {
      name: 'toggle',
      return: null,
      description: 'Toggle the popover',
    },
    close: {
      name: 'close',
      return: null,
      description: 'Close the popover',
    },
  },
};
