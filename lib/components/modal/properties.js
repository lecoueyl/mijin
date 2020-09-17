export default {
  props: {
    size: {
      name: 'size',
      option: ['s', 'm', 'l', 'full'],
      default: 's',
      description: 'Modal size',
    },
    withoutPadding: {
      name: 'without-padding',
      option: ['Boolean'],
      default: false,
      description: 'Remove inner padding',
    },
  },
  slots: {
    header: {
      name: 'header',
      required: false,
      description: 'Header of the modal',
    },
    body: {
      name: 'body',
      required: true,
      description: 'Body of the modal',
    },
    footer: {
      name: 'footer',
      required: false,
      description: 'Footer of the modal',
    },
  },
  methods: {
    show: {
      name: 'show',
      return: null,
      description: 'Show the modal',
    },
    close: {
      name: 'close',
      return: null,
      description: 'Close the modal',
    },
  },
};
