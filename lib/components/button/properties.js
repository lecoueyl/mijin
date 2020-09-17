export default {
  props: {
    color: {
      name: 'color',
      option: ['String'],
      default: 'default',
      description: 'Button color',
    },
    shape: {
      name: 'shape',
      option: ['flat', 'round', 'outline', 'ghost', 'link', 'option'],
      default: 'flat',
      description: 'Button shape',
    },
    type: {
      name: 'type',
      option: ['button', 'submit', 'reset'],
      default: null,
      description: 'Button shape',
    },
    size: {
      name: 'size',
      option: ['xxs', 'xs', 's'],
      default: 's',
      description: 'Button size',
    },
    icon: {
      name: 'icon',
      option: ['String'],
      default: null,
      description: 'Add an icon to the button',
    },
    disabled: {
      name: 'disabled',
      option: ['Boolean'],
      default: 'false',
      description: 'Disable the button',
    },
    loading: {
      name: 'loading',
      option: ['Boolean'],
      default: 'false',
      description: 'Set the button in loading mode',
    },
    notice: {
      name: 'notice',
      option: ['success', 'warning', 'error'],
      default: 'success',
      description: 'Add notice dot',
    },
    tagName: {
      name: 'tag-name',
      option: ['String'],
      default: 'button',
      description: 'Tag Name to be used',
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
  },
};
